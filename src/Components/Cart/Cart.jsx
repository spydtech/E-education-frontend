import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { CartContext } from "../../CartContext";
import axios from "axios"; // Import Axios for API calls
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterPart from "../Home/footer/Footer";
import { useNavigate } from "react-router-dom";

const Cart = ({ history }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.coursePrice,
    0
  );

  const discountPrice = 0;

  // Calculate total amount after discount
  let totalAmount = totalPrice - discountPrice;
  // Add GST of 18%
  const gstAmount = (totalAmount * 0.18).toFixed(2); // Calculate GST amount (18% of totalAmount)
  totalAmount = (parseFloat(totalAmount) + parseFloat(gstAmount)).toFixed(2); // Add GST to totalAmount

  console.log(totalAmount);

  // Initialize Razorpay
  const initializeRazorpay = async (orderId) => {
    const rzp = new window.Razorpay({
      key: "rzp_test_5wPc5EqQCQkluu", // Replace with your actual API key
      amount: totalAmount * 100,
      order_id: orderId,
      currency: "INR",
      name: "SPY D Tech",
      description: "Payment for Courses",
      handler: async function (response) {
        toast("Payment Successfully done");
        // Handle successful payment
        console.log(response);
        // You can redirect to a success page or perform further actions here
        setCartItems([]);
        navigate({
          pathname: "/mylearning",
          state: { courseName: cartItems[0].courseName }, // Assuming the first item's courseName is used
        });

        // Store payment response in the backend
        try {
          const courseNames = cartItems.map((item) => item.courseName);
          const coursePrices = cartItems.map((item) => item.coursePrice);
          const paymentResponse = {
            userId: auth.user.id, // Implement a function to extract user ID from JWT
            firstName: auth.user.firstName,
            lastName: auth.user.lastName,
            userEmail: auth.user.email,
            courseNames: courseNames,
            courseDuration: courseDuration,
            coursePrices: coursePrices,
            totalAmount: totalAmount,
            // orderId: response.razorpay_payment_id,
            razorpayPaymentId: response.razorpay_payment_id,
            paymentStatus: "success",
            paymentMethod: "Razorpay",
          };
          const paymentStoreResponse = await axios.post(
            "http://localhost:8080/api/payment/store-payment", // Backend API endpoint for storing payment
            paymentResponse,
            {
              headers: {
                Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
              },
            }
          );
          console.log(
            "Payment stored successfully:",
            paymentStoreResponse.data
          );
        } catch (error) {
          console.error("Error storing payment:", error);
          alert("Error storing payment. Please contact support."); // Handle payment storage error
        }
      },
    });
    rzp.open(); // Open Razorpay payment popup
  };

  // Handle checkout button click
  const handleCheckout = async (paymentMethod) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create-order", // Backend API endpoint for creating Razorpay order
        {
          amount: totalAmount * 100, // Amount in paisa (convert to integer)
          currency: "INR",
          receipt: "receipt_order_12345",
          paymentMethod: "Razorpay",
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
          },
        }
      );
      const { orderId } = response.data; // Assuming your backend returns the orderId

      initializeRazorpay(orderId); // Initialize and open Razorpay payment popup
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Error initiating payment. Please try again."); // Handle payment error
    }
  };

  return (
    <>
      <Navbar />
      <div className=" mb-10 p-2">
        <div className="grid    grid-cols-1 md:grid-cols-2 md:px-4 relative mt-4">
          {/* <div className=" flex  justify-start p-4 items-center flex-col space-y-2  ">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div> */}
          <div className="flex justify-start p-4 items-center flex-col space-y-2">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} index={index} />
            ))}
          </div>

          <div className="  flex  justify-center lg:px-4    ">
            <div className="py-4 md:w-[500px] w-[300px] h-[400px]  shadow-xl">
              <p className="uppercase text-white bg-[#0098f1] font-bold px-4 py-4 ">
                PRICE DETAILS
              </p>
              <hr />
              <div className="p-4  space-y-6 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>GST 18%</span>
                  <span className="text-green-600">₹{gstAmount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">₹{totalAmount}</span>
                </div>
              </div>
              {/* <Button
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
               
                className="px-4 bg-red-500"
              >
               
              </Button> */}
              <p
                onClick={handleCheckout}
                className="text-center
                 cursor-pointer text-white mt-5 mx-2  md:mx-16 rounded-lg p-4 bg-[#0098f1]"
              >
                Check Out : ₹{totalAmount}
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <FooterPart />
    </>
  );
};

export default Cart;

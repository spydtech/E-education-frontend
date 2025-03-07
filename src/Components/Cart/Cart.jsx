import React, { useContext } from "react";
import CartItem from "./CartItem";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterPart from "../Home/footer/Footer";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../Config/api";
import axios from "axios";
import { CartContext } from "../../CartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth ?? {});
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const totalPrice = cartItems?.reduce((total, item) => total + (item.coursePrice || 0), 0) || 0;
  const gstAmount = ((totalPrice * 0.18) || 0).toFixed(2);
  const totalAmount = (parseFloat(totalPrice) + parseFloat(gstAmount)).toFixed(2);

  const initializeRazorpay = async (orderId) => {
    const rzp = new window.Razorpay({
      key: "rzp_live_O2RbutXpyAfDAP",
      amount: totalAmount * 100,
      order_id: orderId,
      currency: "INR",
      name: "SPY D Tech",
      description: "Payment for Courses",
      handler: async function (response) {
        toast.success("Payment Successfully Done!");
        setCartItems([]);

        console.log("Cart Items before sending to backend:", JSON.stringify(cartItems, null, 2));

        try {
          const paymentResponse = {
            userId: auth?.user?.id,
            firstName: auth?.user?.firstName,
            lastName: auth?.user?.lastName,
            userEmail: auth?.user?.email,
            courseDetails: cartItems.map((item) => ({
              courseName: item.courseName,
              coursePrice: item.coursePrice,
              courseDuration: item.courseDuration, // Ensure it's in "X months" format
            })),
            totalAmount: totalAmount,
            razorpayPaymentId: response.razorpay_payment_id,
            paymentStatus: "success",
            paymentMethod: "Razorpay",
          };
          

          console.log("Data sent to backend:", JSON.stringify(paymentResponse, null, 2));

          await axios.post(`${API_BASE_URL}/api/payment/store-payment`, paymentResponse, {
            headers: { Authorization: `Bearer ${jwt}` },
          });

          navigate("/user/dashboard");
        } catch (error) {
          console.error("Error storing payment:", error);
          toast.error("Error storing payment. Please contact support.");
        }
      },
    });
    rzp.open();
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/create-order`,
        { amount: totalAmount * 100, currency: "INR", receipt: "receipt_order_12345", paymentMethod: "Razorpay", paymentStatus: "success" },
        { headers: { Authorization: `Bearer ${jwt}` } }
      );
      initializeRazorpay(response.data.orderId);
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("Error initiating payment. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-10 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-4 mt-4">
          <div className="flex justify-start p-4 items-center flex-col space-y-2">
            {cartItems.length > 0 ? cartItems.map((item, index) => <CartItem key={index} item={item} index={index} />) : <p className="text-gray-600">Your cart is empty.</p>}
          </div>
          <div className="flex justify-center lg:px-4">
            <div className="py-4 md:w-[500px] w-[300px] h-[400px] shadow-xl">
              <p className="uppercase text-white bg-[#0098f1] font-bold px-4 py-4">PRICE DETAILS</p>
              <hr />
              <div className="p-4 space-y-6 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>GST 18%</span>
                  <span className="text-green-600">₹{gstAmount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">₹{totalAmount}</span>
                </div>
              </div>
              {cartItems.length > 0 && (
                <p onClick={handleCheckout} className="text-center cursor-pointer text-white mt-5 mx-2 md:mx-16 rounded-lg p-4 bg-[#0098f1]">
                  Check Out : ₹{totalAmount}
                </p>
              )}
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

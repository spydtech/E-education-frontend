import React, { useEffect, useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cart from "./Cart"; // Import the Cart component
import Navbar from "../../../Navbar";
const WishLists = ({ courses, onDelete }) => {
  const [cart, setCart] = useState([]);
  const [cr, setCr] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const { wishlist } = location.state || {};
  console.log("Eish", wishlist);

  const handleCartList = (course) => {
    const index = cart.findIndex((item) => item.id === course.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, course]);
    }
  };

  useEffect(() => {
    console.log("cart", cart);
    if (cr) navigate("/cart", { state: { cart } });
  }, [cart]);


  const handleDelete = (id) => {
    setCart((prevCart) => prevCart.filter((course) => course.id !== id));
  };

  const handledataTransfer = (course) => {
    setCr(true);
    handleCartList(course);
  };

  return (

    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-purple-600 underline">
          Wishlist
        </h1>
        {wishlist && wishlist.map((course) => (
          <div className="my-6 h-auto w-[380px] lg:md:h-auto lg:md:w-auto flex justify-between p-10   border-2  border-opacity-15 rounded  overflow-hidden shadow-lg shadow-gray-400 ">
            <div
              key={course.id}
              className=" w-auto rounded overflow-hidden  grid grid-cols-1 lg:md:grid-cols-3"
            >
              <div className="text-white relative">
                <img
                  className="w-full h-auto"
                  src={course.image}
                  alt={course.title}
                />
              </div>

              <div className="px-6 py-4  ">
                <div className="font-bold text-xl mb-2">{course.title}</div>
                <p className="text-gray-700 text-base">{course.description}</p>
              </div>
              <div className="gap-11  flex justify-center items-center">
                <div>
                  <button
                    id="cartbutton"
                    className="relative bg-green-200 hover:bg-green-500 w-36 rounded-lg h-24  text-center "
                    onClick={() => handledataTransfer(course)}
                  >
                    <FaCartArrowDown className="w-8  left-14 absolute rounded h-8 transition-transform duration-300 transform hover:scale-125 text-black" />
                    <p className="pt-8 ">Add to Cart </p>
                  </button>
                </div>
                <div>
                  <button
                    id="deletebutton"
                    className="relative bg-red-200 hover:bg-red-600 w-36 rounded-lg h-24 text-center"
                    onClick={() => onDelete(course.id)}
                  >
                    <IoTrashBinOutline className="w-8 left-14  absolute rounded h-8 transition-transform duration-300 transform hover:scale-125 text-gray-950" />
                    <p className="pt-8">Remove </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Render the Cart component */}
        {/* <Cart courses={cart} onDelete={(id) => handleDelete(id)} /> */}
      </div>
    </>
  );
};

export default WishLists;

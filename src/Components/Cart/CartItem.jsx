import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import { IoCloseCircleSharp } from "react-icons/io5";

const CartItem = ({ item, index }) => {
  const { removeFromCart } = useContext(CartContext);
  const { courseName, coursePrice, courseId, courseDuration } = item;

  const handleRemove = () => {
    removeFromCart(index); // Use the index to remove the item correctly
  };

  return (
    <div className="p-4 relative bg-[#0098f1] lg:w-[400px] md:[350px] w-[300px] h-[250px] flex items-center justify-start rounded-lg">
      <div className="px-4 text-white space-y-1">
        <p className="font-semibold pb-4 text-lg text-white">{courseId}</p>
        <p className="font-bold text-lg text-white">{courseName}</p>
        <p className="font-bold text-lg text-white">{courseDuration}</p>
        <p className="mt-2">Seller: SPY D TECH</p>
        <div className="flex space-x-2 items-center pt-3">
          <p className="font-semibold text-lg">₹{coursePrice}</p>
        </div>
      </div>

      <button
        className="top-2 right-4 absolute font-semibold"
        onClick={handleRemove}
      >
        <IoCloseCircleSharp className="w-10 h-10 text-white" />
      </button>
    </div>
  );
};

export default CartItem;
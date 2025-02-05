import { useState, useContext } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Navbar from "../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
import img from "../../assetss/cart/bg-cart.png";
import FooterPart from "../Home/footer/Footer";
export default function CourseDetails({ course }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { courseName, coursePrice, courseDuration } = location.state;
  const { addToCart } = useContext(CartContext);
  const generateCourseId = () => {
    const digits = "0123456789";
    let courseId = "";
    for (let i = 0; i < 6; i++) {
      // Generate a 6-digit courseId
      courseId += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return courseId;
  };
  const courseId = generateCourseId();

  const handleAddToCart = () => {
    addToCart({ courseName, coursePrice, courseId, courseDuration });
    navigate("/cart");
  };

  return (
    <>
      <Navbar />
      {/* <div className="bg-green-700 lg:px-20 max-h-full">
        <div className="pt-6">
          <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
            <div className="lg:col-span-1 bg-red-400 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
              <div className="lg:col-span-2">
                <h2 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                  {courseName}
                </h2>
              </div>
              <div className='"mt-4 lg:row-span-3 lg:mt-0"'>
                <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                  <p className="font-semibold">₹{coursePrice}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-5">
                <button
                  onClick={handleAddToCart}
                  type="button"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>

              <div
                data-purpose="money-back-guarantee"
                className="dark-bg-text pt-5 money-back-guarantee--color-subdued---0rZH"
              >
                <span class="money-back">30-Day Money-Back Guarantee</span>
              </div>
              <div class="generic-purchase-section--local-incentive--4i-xF">
                <div
                  data-purpose="full-lifetime-access"
                  class="ud-text-xs dark-bg-text full-lifetime-access--color-subdued--o52tD"
                >
                  Full Lifetime Access
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}

      <div className="mb-10 h-screen items-start mt-6 flex md:justify-start justify-center rounded-lg md:mx-10 w-auto  gap-x-0  ">
        <div className="rounded-lg md:gap-x-6 justify-center items-center  flex flex-col md:flex-row">
          {" "}
          <div
            className="p-4 text-center rounded-lg md:w-[400px] w-[300px] h-[250px] bg-cover bg-center flex justify-center items-center text-white capitalize text-xl font-bold"
            style={{ backgroundImage: `url(${img})` }}
          >
            {courseName}
          </div>
          <div className="p-4 flex   flex-col gap-y-14 rounded-lg md:w-[400px] w-[300px] h-[250px] ">
            <div className="">
              <div className="flex space-x-5 items-center text-lg lg:text-2xl tracking-tight text-black ">
                <p className="font-semibold">₹{coursePrice}</p>
              </div>
              <div className="flex space-x-5 items-center text-lg lg:text-2xl tracking-tight text-black ">
                <p className="font-semibold">{courseDuration}</p>
              </div>
              <div
                data-purpose="money-back-guarantee"
                className="text-black text-lg font-semibold pt-5 pb-2 "
              >
                <span class="money-back">30-Day Money-Back Guarantee</span>
              </div>
              <div
                data-purpose="full-lifetime-access"
                class="text-black text-lg  "
              >
                Full Lifetime Access
              </div>
            </div>

            <div className="flex  justify-start py-3">
              <button
                onClick={handleAddToCart}
                type="button"
                className="bg-[#0098f1] text-white text-center px-6 font-semibold py-3 rounded-lg focus:outline-none"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterPart />
    </>
  );
}

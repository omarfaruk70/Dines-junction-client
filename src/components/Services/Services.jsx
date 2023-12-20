import { GiMeal } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="mb-20">
      <h1 className="text-5xl font-bold text-center">Our Services</h1>
      <p className="text-center py-2">
        We provides these services for our respectable customers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-14 mb-10 md:mx-5">
        <div className="bg-gradient-to-r from-amber-200 to-yellow-500 w-80 h-52 flex justify-center items-center flex-col rounded-l-2xl rounded-b-3xl rounded-br-[80px]">
            <h2 className="text-7xl btn -mt-20 text-[#ec5d41eb] rounded-full h-20 w-20 "><GiMeal></GiMeal></h2>
          <h2 className="text-2xl text-center font-semibold">Quality Foods</h2>
          <p className="px-3 py-2 text-base">
            Indulge in our exquisite dishes crafted with fresh, premium
            ingredients for a taste of perfection.
          </p>
        </div>
        <div className="bg-gradient-to-r from-amber-200 to-yellow-500 w-80 h-52 flex justify-center items-center flex-col rounded-l-2xl rounded-b-3xl rounded-tl-[80px]">
        <h2 className="text-7xl -mt-20 text-[#ec5d41eb] btn rounded-full h-20 w-20 "><CiDeliveryTruck></CiDeliveryTruck></h2>
          <h2 className="text-2xl text-center font-semibold">Fast Delivery</h2>
          <p className="px-3 py-2 text-base">
            Swift service, delivering deliciousness to your doorstep—because
            great food should never keep you waiting.
          </p>
        </div>
        <div className="bg-gradient-to-r from-amber-200 to-yellow-500 w-80 h-52 flex justify-center items-center flex-col rounded-l-2xl rounded-b-3xl rounded-bl-[80px]">
        <h2 className="text-7xl -mt-20 text-[#ec5d41eb] btn rounded-full h-20 w-20 "><IoIosPeople></IoIosPeople></h2>
          <h2 className="text-2xl text-center font-semibold">Best Chefs</h2>
          <p className="px-3 py-2 text-base">
            Masters of culinary art, our chefs create unparalleled dishes for an
            extraordinary dining experience.
          </p>
        </div>
        <div className="bg-gradient-to-r from-amber-200 to-yellow-500 w-80 h-52 flex justify-center items-center flex-col rounded-l-2xl rounded-b-3xl rounded-bl-[80px]">
        <h2 className="text-7xl -mt-20 text-[#ec5d41eb] btn rounded-full h-20 w-20 "><FaMobileScreen></FaMobileScreen></h2>
          <h2 className="text-2xl text-center font-semibold">Online Order | Payment</h2>
          <p className="px-3 py-2 text-base">
            Effortlessly browse our menu and place orders online for a seamless
            dining experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

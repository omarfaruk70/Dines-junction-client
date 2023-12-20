import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";




import chef1 from '/chef1.jpg'
import chef2 from '/chef2.jpg'
import chef3 from '/chef3.jpg'
import chef4 from '/chef4.jpg'
const OurChefs = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Our Master Chefs</h2>
      <p className="text-center text-base py-3"> Our master chefs transform every meal into a symphony of flavors.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-12 mt-14 mb-10">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img className='h-full w-full'
              src={chef1}
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Gordon Ramsay
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            Management of the kitchen, menu planning, supervising staff
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
            >
             <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
            >
             <FaTwitterSquare></FaTwitterSquare>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img className='h-full w-full'
              src={chef2}
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Natalie Paisley
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
             Second in command to the executive chef, overseeing kitchen operations
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
            >
             <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img className='h-full w-full'
              src={chef3}
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Anthony Bourdain
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            Specialized in baking and pastry preparation, creating desserts 
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
            >
             <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
            <img className='h-full w-full'
              src={chef4}
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Alice Waters
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            Focuses on creating and testing new recipes and culinary concepts.
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
            <a
              href="#facebook"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="#twitter"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a
              href="#instagram"
              className="block font-sans text-xl antialiased font-normal leading-relaxed  bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChefs;

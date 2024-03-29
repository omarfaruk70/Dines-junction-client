import { FaArrowRight } from "react-icons/fa6";

import b1 from "/food.jpg";
import b2 from "/pizza.jpg";
import b3 from "/chicken stick.jpg";
import b4 from "/burgers.jpg";
import b5 from "/drinks.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel w-full mb-10">
    <div id="slide1" className="carousel-item h-[300px] md:h-[600px] relative w-full">
      <img src={b1} className="w-full  rounded-2xl object-cover" />
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute rounded-2xl w-full h-full">
      <div className="w-full md:w-1/2  md:mx-4 px-3 text-white mt-5 md:mt-28 space-y-1 md:space-y-5">
        <h2 className="md:text-6xl md:leading-[55px] text-2xl font-bold  ">“we serve more than just food. we serve an experience. a memory, a delight”</h2>
        <p><span className="font-bold text-amber-500 text-3xl">30%</span> off for the New year</p>
          <Link className="btn mr-3 bg-[#ec5d41eb] hover:bg-[#a74f3e] text-white" to={'/allfood'}>See menus <FaArrowRight className="md:text-xl" /></Link >
      </div>
      </div>
      <div className="absolute flex gap-x-3 justify-end transform  left-5 right-5  top-3/4 md:top-3/4">
        <a
          href="#slide5"
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href="#slide2"
          className="btn btn-circle bg-[#ec5d41eb] text-white hover:bg-[#a74f3e]"
        >
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item h-[300px] md:h-[600px] relative w-full">
      <img src={b2} className="w-full  rounded-2xl object-cover" />
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute rounded-2xl   w-full h-full">
      <div className="w-full md:w-1/2  md:mx-4 px-3 text-white mt-5 md:mt-28 space-y-1 md:space-y-5">
        <h2 className="md:text-5xl md:leading-[67px] text-2xl font-bold  ">Dine with us, where every meal is a celebration,and your satisfaction is our masterpiece.</h2>
        <p><span className="font-bold text-amber-500 text-3xl">30%</span> off for the New year</p>
          <Link className="btn mr-3 bg-[#ec5d41eb] hover:bg-[#a74f3e] text-white" to={'/allfood'}>See menus <FaArrowRight className="md:text-xl" /></Link >
      </div>
      </div>
      <div className="absolute flex gap-x-3  justify-end transform  left-5 right-5  top-3/4 md:top-3/4">
        <a
          href="#slide1"
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href="#slide3"
          className="btn btn-circle bg-[#ec5d41eb] text-white hover:bg-[#a74f3e]"
        >
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item h-[300px] md:h-[600px] relative w-full">
      <img src={b3} className="w-full  rounded-2xl object-cover" />
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute   w-full h-full">
      <div className="w-full md:w-1/2  md:mx-4 px-3 text-white mt-5 md:mt-28 space-y-1 md:space-y-5">
        <h2 className="md:text-6xl md:leading-[55px] text-2xl font-bold  ">Elevate your senses with each dish —a journey of flavors, crafted exclusively for you</h2>
        <p><span className="font-bold text-amber-500 text-3xl">30%</span> off for the New year</p>
          <Link className="btn mr-3 bg-[#ec5d41eb] hover:bg-[#a74f3e] text-white" to={'/allfood'}>See menus <FaArrowRight className="md:text-xl" /></Link >
      </div>
      </div>
      <div className="absolute flex gap-x-3  justify-end transform  left-5 right-5  top-3/4 md:top-3/4">
        <a
          href="#slide2"
          className="btn btn-circle "
        >
          ❮
        </a>
        <a
          href="#slide4"
          className="btn btn-circle bg-[#ec5d41eb] text-white hover:bg-[#a74f3e]"
        >
          ❯
        </a>
      </div>
    </div>
    <div id="slide4" className="carousel-item h-[300px] md:h-[600px] relative w-full">
      <img src={b4} className="w-full  rounded-2xl object-cover" />
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute rounded-2xl w-full h-full">
      <div className="w-full md:w-1/2  md:mx-4 px-3 text-white mt-5 md:mt-28 space-y-1 md:space-y-5 ">
        <h2 className="md:text-6xl md:leading-[55px] text-2xl font-bold  ">Taste the joy in every bite
        —where passion meets plate, creating moments to savor</h2>
        <p><span className="font-bold text-amber-500 text-3xl">30%</span> off for the New year</p>
          <Link className="btn mr-3 bg-[#ec5d41eb] hover:bg-[#a74f3e] text-white" to={'/allfood'}>See menus <FaArrowRight className="md:text-xl" /></Link >
      </div>
      </div>
      <div className="absolute flex gap-x-3  justify-end transform  left-5 right-5 top-3/4 md:top-3/4">
        <a
          href="#slide3"
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href="#slide5"
          className="btn btn-circle bg-[#ec5d41eb] text-white hover:bg-[#a74f3e]"
        >
          ❯
        </a>
      </div>
    </div>
    <div id="slide5" className="carousel-item h-[300px] md:h-[600px] relative w-full">
      <img src={b5} className="w-full  rounded-2xl object-cover" />
      <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] absolute rounded-2xl w-full h-full">
      <div className="w-full md:mx-4 px-3 text-white mt-5 md:mt-28 space-y-1 md:space-y-3 ">
        <h2 className="md:text-6xl text-2xl font-bold md:leading-[78px]">Sip into the chill vibes - <br /> where
        every drop is a refreshing escape,  <br />and coolness meets delight.</h2>
        <p><span className="font-bold text-amber-500 text-3xl">30%</span> off for the New year</p>
          <Link className="btn mr-3 bg-[#ec5d41eb] hover:bg-[#a74f3e] text-white" to={'/allfood'}>See menus <FaArrowRight className="md:text-xl" /></Link >
      </div>
      </div>
      <div className="absolute flex gap-x-3  justify-end transform  left-5 right-5 top-3/4 md:top-3/4">
        <a
          href="#slide4"
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href="#slide1"
          className="btn btn-circle bg-[#ec5d41eb] text-white hover:bg-[#a74f3e]"
        >
          ❯
        </a>
      </div>
    </div>
    </div>
  );
};

export default Banner;

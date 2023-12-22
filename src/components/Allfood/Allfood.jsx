// import { useLoaderData } from "react-router-dom";
import FoodsCard from "../FoodsCard/FoodsCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
const Allfood = () => {
  // const allfoodData = useLoaderData();
  const axios = useAxios();
  const allorigin = [
    'India',
    'China',
    'America',
    'Bangladesh'
  ]


  // const [search, setSearch] = useState('');
  const [price, setPrice] = useState("");
  const [origin, setOrigin] = useState("");

  const getServices = async () => {
    const res = await axios.get(`/route/getallfood/?origin=${origin}&sortField=price&sortOrder=${price}`);
    return res;
  };
  const { data:allfoodData, isLoading, isError, error } = useQuery({
    // here the object property also use isLoading, isError, error,
    queryKey: ["foods", price, origin],
    queryFn: getServices,
  });
  if(isLoading){
    return <div className="text-3xl font-bold flex justify-center items-center h-screen text-blue-600">Loading....</div>
   }
 if(isError){
  return <div className="text-3xl font-bold flex justify-center items-center h-screen text-blue-600">Something went wrong {error}</div>
 }
  return (
    <div className="max-w-7xl mx-auto py-3 mb-5">
      <h2 className="text-3xl font-bold text-center">Our Available foods</h2>
      <div className="bg-yellow-600 border-t-[4px] rounded-full border-yellow-500 mb-4 max-w-[200px] mx-auto"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4 items-center border-2 rounded-2xl py-3 border-yellow-300 mb-3">
        <div className="flex justify-center items-center gap-5">
          <div className="relative flex w-full gap-2 md:w-max">
            <div className="relative h-10 w-full min-w-[288px]">
              <input
                type="search"
                className="peer h-full w-full rounded-[7px] border border-yellow-600 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-balck after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-yellow-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search here...
              </label>
            </div>
            <button
              className="!absolute right-1 top-1 select-none rounded bg-yellow-500 text-white py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold text-center">Price</p>
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => setPrice(e.target.value)}
            name=""
            id=""
          >
            <option value={"DEFAULT"} defaultChecked disabled>
              Choose one
            </option>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </div>
        <div>
          <h2 className="text-xl font-bold text-center">Origin</h2>
          <select onChange={(e) => setOrigin(e.target.value)} defaultValue={'DEFAULT'} id="">
        <option disabled value={'DEFAULT'}>Choose One</option>
         {
           allorigin.map((singleOrigin) => <option key={singleOrigin} value={singleOrigin}>{singleOrigin}</option>)
          }
       </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-4">
        {allfoodData?.data.map((food) => (
          <FoodsCard key={food._id} food={food}></FoodsCard>
        ))}
      </div>
    </div>
  );
};

export default Allfood;

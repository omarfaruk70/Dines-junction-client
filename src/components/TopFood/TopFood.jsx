import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const TopFood = () => {
  const axios = useAxios();
  const {data: topFood} = useQuery({
    queryKey: ['topFood'],
    queryFn: () => {
        const res = axios.get('/route/topfood');
        return res ;
    }
  })  
return (
  <div>
        <div className="mb-5">
            <h2 className="text-5xl font-bold text-center mb-5">Top Foods we found for you.</h2>    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-4">
        {topFood?.data?.map((food) => (
         <div key={food._id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
         <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
           <img className='h-full w-full object-cover'
             src={food.foodImage}
             alt="profile-picture"
           />
         </div>
         <div className="p-6">
           <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Name: 
           {food.foodName}
           </h4>
         <div className="flex justify-between flex-col md:flex-row">
           <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
           Category: {food.foodCategory}
           </p>
             <p>Price: <span className="text-xl font-semibold">{food.price}</span> $</p>
         </div>
         <Link to={`/allfood/singlefood/${food._id}`}><button className="btn btn-block mt-4 bg-amber-500 hover:bg-amber-600 text-white" type="btn">Details</button></Link>
         </div>
       </div>
        ))}
        </div>  
        </div>
        <Link className="btn btn-block max-w-[150px] mb-8 mx-auto flex justify-center items-center mt-4 bg-amber-500 hover:bg-amber-600 text-white" to={'/allfood'}>
        <button>See All</button>     
        </Link>
        </div>
    );
};

export default TopFood;
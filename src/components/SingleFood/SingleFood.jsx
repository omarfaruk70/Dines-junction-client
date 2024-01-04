import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const SingleFood = () => {
  const {user} = useContext(AuthContext);
  const singlefood = useLoaderData();
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    price,
    madeBy,
    origin,
    ingredients,
  } = singlefood;
  console.log(user?.email);
  return (
    <div className="md:px-3">
      <h2 className="text-4xl text-center py-5">
        Every single bite is a seperate memory
      </h2>
      <div className="relative flex max-w-xl md:max-w-3xl mx-2 md:mx-auto my-2 flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl md:h-80">
          <img
            className="md:h-full md:w-full"
            src={foodImage}
            alt="profile-picture"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 text-center font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {foodName}
          </h4>
          <div className="flex justify-around text-xl mb-2">
            <p>Category: {foodCategory}</p>
            <p>Origin: {origin}</p>
            <p>Price: {price} $</p>
          </div>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            Ingradients: {ingredients}
          </p>
          <p className="text-xl">Made by: <span className="font-bold">{madeBy}</span></p>
        </div>
       {
        user?.email == singlefood.userEmail ?
        <Link to={'/addfood'} className="btn mx-5 md:mx-16  bg-slate-500 hover:bg-amber-600 text-white my-2 disabled">
        <button>Add More</button>
        </Link>  
        :
         <Link to={`/foodpurchase/fooditem/${_id}`} className="btn mx-5 md:mx-16  bg-amber-500 hover:bg-amber-600 text-white my-2">
         <button>Order Now</button>  
         </Link>
         }
      </div>
    </div>
  );
};

export default SingleFood;

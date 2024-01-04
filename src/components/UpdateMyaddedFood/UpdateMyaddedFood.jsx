import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateMyaddedFood = () => {
  const data = useLoaderData();
  const axios = useAxios();
  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const foodName = form.foodName.value;
    const foodImage = form.photourl.value;
    const origin = form.foodorigin.value;
    const foodCategory = form.foodCategory_name.value;
    const price = form.foodprice.value;
    const quantity = form.foodquantity.value;
    const ingredients = form.description.value;
    const updateFoodInfo = {
      foodName,
      foodImage,
      origin,
      foodCategory,
      price,
      quantity,
      ingredients,
    };
       axios.put(`/user/updatefoodinfo/${data._id}`, updateFoodInfo)
       .then(res =>{
        if(res?.data?.modifiedCount){
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Your Food item is updated",
              });
         }
       })
  };

  return (
    <div className="max-w-5xl space-y-4 m-2 text-2xl font-bold mx-auto">
       <Helmet>
        <title>Dines-Junction | Profile-updateFood </title>
       </Helmet>
      <h2 className="text-center">Update food info</h2>
      <form
        onSubmit={handleUpdateFood}
        className="max-w-2xl p-10 rounded-md mx-auto bg-gradient-to-b from-teal-200"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="foodName"
            defaultValue={data?.foodName}
            id="floating_foodName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_foodName"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Food name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="photourl"
            defaultValue={data?.foodImage}
            id="floating_photourl"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_photourl"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Foods photo url
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="foodorigin"
            defaultValue={data?.origin}
            id="floating_foodorigin"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_foodorigin"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Food Origin (India, China, America, Bangladesh)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="foodCategory_name"
            defaultValue={data?.foodCategory}
            id="floating-foodCategory_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating-foodCategory_name"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Food Category (Biriyani, rice, chicken, Burger...)
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="foodprice"
              defaultValue={data?.price}
              id="foodprice"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="foodprice"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Food Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="foodquantity"
              defaultValue={data?.quantity}
              id="foodquantity"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="foodquantity"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Quantity
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="description"
            defaultValue={data?.ingredients}
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Short description (Used ingredients)
          </label>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="text-white flex mx-auto bg-teal-500 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm  sm:w-auto px-24 py-2.5 text-center"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyaddedFood;

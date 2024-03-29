import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const Foodpurchase = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const data = useLoaderData();
  const { foodName, price, quantity, foodImage } = data;
  const  today  = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  
  const todaysDate = today.toLocaleDateString("en-US", options);
  let orderCount = 0 ;
  const handlefoodPurchase = (event) => {
    event.preventDefault();
    const form = event.target;
    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const foodPrice = form.price.value;
    const foodQuantity = form.quantity.value;
    const buyerName = form.buyer_name.value;
    const buyerEmail = form.buyer_email.value;
    const buyingDate = form.buying_date.value;
    const buyingTime = form.buying_time.value;
    orderCount ++ ;
    console.log(orderCount);
    if(orderCount > foodQuantity){
      return Swal.fire({
        icon: "error",
        title: "Failed",
        text: "You can not Order more then available Food",
      });
    }
    const purchaseFood = {
      foodName,
      foodImage,
      foodPrice,
      foodQuantity,
      buyerName,
      buyerEmail,
      buyingDate,
      buyingTime,
      orderCount
    };
    if (foodPrice && foodQuantity < 1) {
      return Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Sorry 😒 This item is not available!",
      });
    } else {
      axios.post("/user/purchasefood", purchaseFood).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your purchase is confirmed!",
            icon: "success",
          });
        }
      });
    }
  };
  return (
    <div className="max-w-5xl m-10 mx-auto">
      <div className="max-w-3xl bg-base shadow-lg py-10 rounded-lg mx-auto">
        <h2 className="text-2xl py-5 font-bold text-center">
          {" "}
          Continue with Order
        </h2>
        <form
          onSubmit={handlefoodPurchase}
          className="max-w-md md:max-w-3xl mx-10"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="food_name"
              id="food_name"
              defaultValue={foodName}
              disabled
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="food_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Food Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="link"
              name="food_image"
              id="food_image"
              disabled
              defaultValue={foodImage}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="food_image"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Food Image
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="price"
              id="price"
              disabled
              defaultValue={price}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="$"
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="quantity"
              id="quantity"
              disabled
              defaultValue={quantity}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="quantity"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Food Quantity
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="buyer_name"
              id="buyer_name"
              defaultValue={user?.displayName}
              readOnly
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="buyer_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Buyer name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="buyer_email"
              id="buyer_email"
              defaultValue={user?.email}
              readOnly
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="buyer_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Buyer Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="buying_date"
              id="floating_buying_date"
              defaultValue={todaysDate}
              disabled
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_buying_date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Order Date
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="time"
              name="buying_time"
              id="floating_buying_time"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_buying_date"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Order time
            </label>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="btn md:mx-16 px-20  bg-amber-500 hover:bg-amber-600 text-white my-2"
            >
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Foodpurchase;

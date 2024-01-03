import useAxios from "../../hooks/useAxios";
import { TbListDetails } from "react-icons/tb";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyAddedFood = () => {
  const [addedFood, setAddedFood] = useState([]);
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const queryEmail = user?.email;
  useEffect(()=> {
    axios.get(`/route/myaddedfood?email=${queryEmail}`)
  .then((res) => {
    setAddedFood(res);
  });
  }, [])
  return (
    <div>
      <h2 className="text-3xl text-center mt-2">
        Recently You Added those food item
      </h2>
      <div className="flex justify-center m-10 max-w-7xl mx-auto bg-base-300">
        {addedFood?.data?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Img</th>
                  <th>Food Name</th>
                  <th>Price</th>
                  <th>Imported From</th>
                  <th>Food Owner</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {addedFood?.data?.map((food, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <th>
                      <img
                        src={food.foodImage}
                        className="h-20 w-28 rounded-lg"
                        alt=""
                      />
                    </th>
                    <th>{food.foodName}</th>
                    <th>{food.price} $</th>
                    <th>{food.origin}</th>
                    <th>{food.addedBy}</th>
                    <th>
                      <button
                        className="btn btn-circle text-white bg-blue-500 hover:bg-blue-700"
                      >
                        <TbListDetails />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="flex justify-center items-center text-3xl font-bold">
            You have no Added item
          </p>
        )}
      </div>
    </div>
  );
};

export default MyAddedFood;

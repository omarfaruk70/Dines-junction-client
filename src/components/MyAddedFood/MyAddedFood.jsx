import useAxios from "../../hooks/useAxios";
import { TbListDetails } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyAddedFood = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const queryEmail = user?.email;
  const queryClient = useQueryClient();
  const { data: addedFood } = useQuery({
    queryKey: ["addedFood"],
    queryFn: () => {
      const res = axios.get(`/route/myaddedfood?email=${queryEmail}`);
      return res;
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["AddedFood"],
    mutationFn: (id) => {
      const res = axios.delete(`/route/myaddedfood/${id}`);
      return res;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Done!",
        text: "You Have canceled your added food!",
        icon: "success"
      });
      queryClient.invalidateQueries({ queryKey: ["addedFood"] });
    },
  });
  return (
    <div>
      <div className="flex justify-center m-10 max-w-7xl mx-auto bg-base-300">
        {addedFood?.data?.length > 0 ? (
          <div className="overflow-x-auto">
            {/* <h2 className="text-3xl text-center mt-2 mb-5">
              Recently You Added those food item
            </h2> */}
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
                  <th>Details</th>
                  <th>Delete</th>
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
                      <Link to={`/updatemyaddedfood/${food._id}`}>
                        <button className="btn btn-circle text-white bg-blue-500 hover:bg-blue-700">
                          <TbListDetails className="text-2xl" />
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => mutate(food._id)}
                        className="btn btn-circle text-white bg-red-500 hover:bg-amber-700"
                      >
                        <MdDelete className="text-2xl" />
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

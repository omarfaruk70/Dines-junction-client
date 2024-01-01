import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Myorderdfood = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const queryEmail = user.email;
  const queryClient = useQueryClient();
  const { data: orderdFood } = useQuery({
    queryKey: ["OrderdFood"],
    queryFn: async () => {
      const res = await axios.get(`/route/getorderdfood?email=${queryEmail}`);
      return res;
    },
  });

  const {mutate} = useMutation({
    mutationKey: ['OrderdFood'],
    mutationFn: (id) => {
      const res = axios.delete(`/user/deletefood/${id}`);
      console.log(res);
      return res;
    },
    onSuccess: () => {
      Swal.fire({
        title: "Done!",
        text: "You Have canceled your order!",
        icon: "success"
      });
      queryClient.invalidateQueries({queryKey: ['OrderdFood']})
    }
  })

  return (
    <div>
      <div className="flex justify-center m-10 max-w-7xl mx-auto bg-base-300">
        {orderdFood?.data?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Img</th>
                  <th>Food Name</th>
                  <th>Price</th>
                  <th>Added Time</th>
                  <th>Food Owner</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orderdFood?.data?.map((food, i) => (
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
                    <th>{food.foodPrice} $</th>
                    <th>{"jwt theke dibo"}</th>
                    <th>{food.foodOwner}</th>
                    <th>
                      <button
                        onClick={() => mutate(food?._id)}
                        className="btn btn-circle text-white bg-red-500"
                      >
                        X
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="flex justify-center items-center text-3xl font-bold">
            You have no orders yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Myorderdfood;
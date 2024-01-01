import { useLoaderData } from "react-router-dom";

const Myorderdfood = () => {
  const orderdFood = useLoaderData();
  return (
    <div>
      <div className="flex justify-center m-10 max-w-7xl mx-auto bg-base-300">
        {
            orderdFood.length ? <div className="overflow-x-auto">
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
              {
                 orderdFood.map((food, i) => (
                  <tr key={i}>
                      <th>{i + 1}</th>
                      <th><img src={food.foodImage} className="h-20 w-28 rounded-lg" alt="" /></th>
                      <th>{food.foodName}</th>
                      <th>{food.foodPrice} $</th>
                      <th>{"jwt theke dibo"}</th>
                      <th>{food.foodOwner}</th>
                      <th><button onClick={()=> food._id} className="btn btn-circle text-white bg-red-500">X</button></th>
                  </tr>
                 ))
              }
              </tbody>
            </table>
          </div> : <p className="flex justify-center items-center text-3xl font-bold">Your have no orderd food</p>
        }
      </div>
    </div>
  );
};

export default Myorderdfood;
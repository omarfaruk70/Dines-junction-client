import { useLoaderData } from "react-router-dom";

const UpdateMyaddedFood = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
           <div>
           Hi babay are you comming here ?
           </div>
        </div>
    );
};

export default UpdateMyaddedFood;
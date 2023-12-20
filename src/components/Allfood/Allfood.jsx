import { useLoaderData } from "react-router-dom";
import FoodsCard from "../FoodsCard/FoodsCard";
const Allfood = () => {
    const allfoodData = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto py-5 mb-10">
           <h2 className="text-3xl font-bold text-center py-3">Our Available foods</h2>
           <div className="bg-yellow-600 border-t-[4px] rounded-full border-yellow-500 mb-5 max-w-[200px] mx-auto"></div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-4">
            {
                allfoodData.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
            }
           </div>
        </div>
    );
};

export default Allfood;
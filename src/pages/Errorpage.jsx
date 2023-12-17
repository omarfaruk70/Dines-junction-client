import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div className="h-[100px]">
        <div className="flex justify-center items-center h-72 md:h-96 lg:h-[600px]">
        <iframe src="https://lottie.host/embed/735d6412-2428-4db4-ab8d-c219e98f3482/qkxBn4QXvG.json" className="h-[800px] w-[500px] text-red-600"></iframe>
        </div>
        <div className="flex justify-center items-center">
          <Link to={'/'}>
        <button className=" btn text-white bg-yellow-500">Go Home</button>
          </Link>
        </div>
        </div>
    );
};

export default Errorpage;
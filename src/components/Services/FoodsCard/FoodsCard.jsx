import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const FoodsCard = ({food}) => {
    const {_id,foodName,foodImage,foodCategory,quantity, price} = food;
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
          <img className='h-full w-full'
            src={foodImage}
            alt="profile-picture"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">Name: 
          {foodName}
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          Category: {foodCategory}
          </p>
        <div className="flex justify-between flex-col md:flex-row">
            <p>Quantity: {quantity}</p>
            <p>Price: <span className="text-xl font-semibold">{price}</span> $</p>
        </div>
        <Link to={`/allfood/singlefood/${_id}`}><button className="btn btn-block mt-4 bg-amber-500 hover:bg-amber-600 text-white" type="btn">Details</button></Link>
        </div>
      </div>
    );
};

export default FoodsCard;
FoodsCard.propTypes = {
    food: PropTypes.object.isRequired
}
import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
          <div className="flex flex-col justify-center items-center h-screen">
          <span className="loading bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90 w-10 md:w-20 lg:w-32"></span>
          ;
        </div>
        );
      }
      if (!user?.email) {
        return <Navigate to={"/login"} state={location.pathname}></Navigate>;
      }
      return children;

};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}
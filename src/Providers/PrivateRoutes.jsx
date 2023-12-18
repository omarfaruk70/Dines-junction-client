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
           <iframe src="https://lottie.host/embed/f462cd88-dbe6-4ed4-9411-c9429e069516/zAjrKTBy5A.json" className="h[500px] w-[500px"></iframe>
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
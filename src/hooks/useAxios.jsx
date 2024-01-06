import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create(
    {
        baseURL: ' https://dines-junction-server-c6h0qon63-omar-faruks-projects.vercel.app/api/v1',
        withCredentials: true
    }
)
const useAxios = () => {
    const {logOutUser} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect( () => { axiosInstance.interceptors.response.use(
        function (response){
            return response;
        }, function (error){
            if(error?.response?.status === 401 || error?.response?.status === 403){
                logOutUser();
                return navigate('/login')
            }
        }
    )}, [])
    return axiosInstance;
};

export default useAxios;
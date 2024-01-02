import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const axiosInstance = axios.create(
    {
        baseURL: 'http://localhost:5000/api/v1',
        withCredentials: true
    }
)
const useAxios = () => {
    const {logOutUser} = useContext(AuthContext);
    useEffect( () => { axiosInstance.interceptors.response.use(
        function (response){
            return response;
        }, function (error){
            if(error?.response?.status === 401 || error?.response?.status === 403){
                logOutUser();
            }
        }
    )}, [])
    return axiosInstance;
};

export default useAxios;
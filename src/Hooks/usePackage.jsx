import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const usePackage = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {refetch, data: packageData = []} = useQuery({
        queryKey: ['package', user?.email],
        queryFn: async() => {
          const res = await axiosSecure.get(`/packages?email=${user.email}`);
          return res.data;
        }
    })

    return [packageData, refetch];
};

export default usePackage;
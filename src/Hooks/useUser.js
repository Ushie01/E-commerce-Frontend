import { useEffect, useState } from "react";
import { getAllUser } from "../helper/api";

export const useUser = (item) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const userDetail = JSON.parse(localStorage.getItem(item)) || [];
        if (userDetail) {
            setUser(userDetail);
        }
    }, [item]);

    return { user };
}; 

export const useAllUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getAllUser()
        .then((data) => setUser(data))
    }, []);
    return { user };
}; 
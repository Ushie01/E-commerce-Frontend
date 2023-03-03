import { useEffect, useState } from "react";


export const useUser = ({item}) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const userDetail = localStorage.getItem(item);
        const user = JSON.parse(userDetail);
        if (user) {
            setUser(user);
        }
    }, [item]);

    return { user };
}; 
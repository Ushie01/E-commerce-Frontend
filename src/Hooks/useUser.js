import { useEffect, useState } from "react";


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
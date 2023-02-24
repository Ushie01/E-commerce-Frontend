import { useEffect, useState } from "react";


export const useUser = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const userDetail = localStorage.getItem('user');
        const user = JSON.parse(userDetail);
        if (user) {
            setUser(user);
        }
    }, []);
    return { user };
}; 
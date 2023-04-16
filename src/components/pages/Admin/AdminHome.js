import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../componentsItem/adminNavbar";
import Menu from "../../componentsItem/menu";


const Admin = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const handleMenuClick = () => {
        setClick(false);
    }
    
    return (
        <>
            <AdminNav
               onclick={handleClick}
            />
            <hr />
            {
                click
                    ?
                     <Menu onClick={handleMenuClick} />
                    :
                    <Outlet />
            }
           
        </>
    )
}

export default Admin;
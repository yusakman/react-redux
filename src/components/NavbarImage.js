import React from "react";
import { useSelector } from "react-redux/es/exports";

const NavbarImage = () => {
    // const [ava] = data.ava;
    const reduxData = useSelector((state) => state)
    return (
        <div>
            <img src={reduxData.auth.ava}/>
        </div>
    )
}

export default NavbarImage
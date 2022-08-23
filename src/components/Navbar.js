import React, { useState } from "react";
import NavbarImage from "./NavbarImage";
import NavbarName from "./NavbarName";
// import Logo from '../../public/dragon-svg.svg';

const Navbar = () => {
    // const [data, setData] = useState({
    //     name:'Bertoli',
    //     ava:'https://reqres.in/img/faces/9-image.jpg'
    // })

    const navStyle =  {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "red"
    }
    // const props = [
    //     data
    // ]

    return (
        <div style={navStyle}>
            {/* <h1>{data.name}</h1>
            <img src={data.ava}></img> */}
            <NavbarName></NavbarName>
            <NavbarImage></NavbarImage>
        </div>
    )
}

export default Navbar
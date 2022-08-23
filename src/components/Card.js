import React, { useState } from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import { useSelector, useDispatch } from 'react-redux'

const Card = () => {
    const reduxData = useSelector((state) => (state))
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name:'Bertoli',
        ava:'https://reqres.in/img/faces/9-image.jpg'
    })

    // const props = [
    //     data
    // ]

    return (
        <div>
            {/* <h1>{data.name}</h1>
            <img src={data.ava}></img> */}
            {console.log(reduxData)}
            <CardName data={data}></CardName>
            <CardImage data={data}></CardImage>
            
        </div>
    )
}

export default Card
import React from "react";
import { useSelector, useDispatch } from 'react-redux'

const CardImage = () => {
    // const [ava] = data.ava;
    const reduxData = useSelector((state) => (state))

    return (
        <div>
            {console.log("reduxData", reduxData)}
            <img src={reduxData.auth.ava}/>
        </div>
    )
}

export default CardImage
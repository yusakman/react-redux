import React from "react";
import { useSelector } from "react-redux/es/exports";

const CardName = () => {
    const reduxData = useSelector((state) => (state))
    return (
        <div>
            <h1>{reduxData.auth.name}</h1>
        </div>
    )
}

export default CardName
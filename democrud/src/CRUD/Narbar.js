import {Link} from "react-router-dom";
import {useState} from "react";

export default function Narbar(){
    return(
        <>
            <h1>
                <Link to="/products/list">List Product</Link> |
                <Link to="/products/create">Create Product</Link> |
            </h1>
        </>
    )
}
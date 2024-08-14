import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function Update(){
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    const params = useParams();
    const idUpdate = params.id;
    const navigate = useNavigate()
    const changeName = (event) => {
        let dataInput = event.target.value;
        setName(dataInput)
    }
    const changePrice = (event) => {
        let dataInput = event.target.value;
        setPrice(dataInput)
    }
    const changeQuantity = (event) => {
        let dataInput = event.target.value;
        setQuantity(dataInput)
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/products/" + idUpdate).then((res)=>{
            let data = res.data;
            setName(data.name);
            setPrice(data.price);
            setQuantity(data.quantity);
        })
    },[])
    const submit = () => {
        let product = {
            name:name,
            price:price,
            quantity:quantity
        }
        axios.put(`http://localhost:3000/products/${idUpdate}`,product).then(()=>{
            alert("Update Success!!!");
            navigate("/products/list");
        })
    }

    return (
        <>
            <h1>Update Product</h1>
            <input value={name} placeholder={"Name"} onChange={(event) => {
                changeName(event)
            }}/>
            <input value={price} placeholder={"Price"} onChange={(event) => {
                changePrice(event)
            }}/>
            <input value={quantity} placeholder={"Quantity"} onChange={(event) => {
                changeQuantity(event)
            }}/>
            <button onClick={()=>{submit()}}>Submit</button>
        </>
    )
}
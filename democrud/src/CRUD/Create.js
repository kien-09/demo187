import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Create() {
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
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
    const submit = () => {
        let product = {
            name:name,
            price:price,
            quantity:quantity
        }
        axios.post("http://localhost:3000/products",product).then(()=>{
            alert("Thêm thành công!!!");
            navigate("/products/list");
        })
    }

    return (
        <>
            <h1>Create Product</h1>
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
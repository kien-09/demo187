import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function List() {
    let [products, setProducts] = useState([]);
    let [nameSearch,setNameSearch]=useState("")
    const getList = ()=>{
        axios.get("http://localhost:3000/products").then((res)=>{
            let data = res.data;
            setProducts(data)
        })
    }
    useEffect(()=>{
        getList();
    },[]);

    const remove = (id) =>{
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm){
            axios.delete(`http://localhost:3000/products/${id}`).then((res)=>{
                alert("Delete!!!");
                getList()
            })
        }
    }
    let findNameContain = (event) => {
        setNameSearch(event.target.value);
        let input = event.target.value;
        if (input === "") {
            getList();
        } else {
            let newList = products.filter((item) => {
                let nameProducts = item.name;
                return nameProducts.toLowerCase().includes(input.toLowerCase());
            });
            setProducts(newList);
        }
    }
    return (
        <>
            <h1>List Product</h1>
            <input placeholder={'Nhập tên sản phẩm'} value={nameSearch} onChange={(event) => {
                findNameContain(event)
            }}/>
            <table border={1}>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td colSpan={2}>Delete and Update</td>
                </tr>
                {
                    products.map((item) => (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button onClick={() => {
                                            remove(item.id)
                                        }}>Delete
                                        </button>
                                    </td>
                                    <td><Link to={`/products/update/${item.id}`}>Update</Link></td>
                                </tr>
                            </>
                        )
                    )
                }
            </table>
        </>
    )
}
import Narbar from "./Narbar";
import {Outlet} from "react-router-dom";

export default function Home(){

    return(
        <>
            <Narbar/>
            <Outlet/>
        </>
    )
}
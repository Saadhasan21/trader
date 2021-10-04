import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedProduct,
    removeSelectedProduct,
} from "../redux/actions/productsActions";

const Viewalgo = () => {
    const { productId } = useParams();
    console.log(productId);
    // let bots = useSelector((state) => state.bots);
    // const { id, description, bot, index, cagr } = bots;
    // const dispatch = useDispatch();
    // console.log(bots);

    // const getdetails = () =>{
    //     dispatch(selectedProduct({description}));
    // }

    // useEffect(()=>{
    //     if (productId && productId !== "") getdetails();
    

return (
    <div>details</div>
)
}

export default Viewalgo;
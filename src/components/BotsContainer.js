import React from "react";
import { useSelector } from "react-redux";
import Totalbots from "./Totalbots";

const BotsContainer = () => {
    const data = useSelector((state)=>state);
    console.log(data);

    return (
        <div>
            
            <Totalbots/>
        </div>
    );
};

export default BotsContainer;


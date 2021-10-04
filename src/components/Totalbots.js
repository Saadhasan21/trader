import React from "react";
import { useSelector } from "react-redux";
import "./Totalbots.css";
import { Link } from "react-router-dom";
const Totalbots = () => {

    const datas = useSelector((state) => state.allbots.botsData);
    const renderList = datas.map((data) => {
        const { id, description, bot, index, cagr } = data;
        return (

            <div className="main-body" key={id}>
                <div className="f-container">
                    <div>{bot}</div>
                    <div>
                        <div>Index Value</div>
                        <div>{index}</div>
                    </div>
                    <div>
                        <div>cagr</div>
                        <div className="cagr">{cagr}</div>
                    </div>
                    <div>
                        <Link to={`/bots-details/${id}`}>
                            <button>View algo</button>
                        </Link>
                        <div>
                        <button>Buy</button>
                        </div>
                    </div>
                </div>

            </div >

        );
    });

    return (
        <>
            <div>Select the best algo suited for your need</div>
            {renderList}
        </>
    )

}

export default Totalbots;
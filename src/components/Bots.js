import React from 'react';
import './Bots.css';


import { Link } from 'react-router-dom';

export default function bots(props) {

  
    return (
        <>
            <div className="f-container">

                <div className="f-item">{props.botbot}</div>
                <div className="f-item"><div>Index value</div><div>{props.botindex}</div></div>
                <div className="f-item" ><div>Cagr</div><div className="cagr">{props.botcagr}</div></div>
                <div className="f-item">
                    <div><Link to={`/bots-details/${props.botid}`}>Viewalgo</Link></div>
                    <div><button>Buy</button></div>
                </div>

                {/* <link to="/Viewalgo">scs</link> */}
            </div>
            <hr />
        </>
    )
}


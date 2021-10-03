import React from 'react'

export default function Viewalgo(props) {

    return (
        <div className="f-container">
            <div>
                <div>{props.botbot}</div>
                <div>{props.botdisc}</div>
            </div>
            <div>
                <div>Index Value</div>
                <div>{props.botindex}</div>
            </div>
            <div>
                <div>cagr</div>
                <div className="cagr">{props.botcagr}</div>
            </div>
        </div>
    );
}

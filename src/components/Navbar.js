import React, {useState} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [state, setstate] = useState(0);
    return (
        <div className="n-container">
           <div className="n-item"><Link to="/bots">DashBoard</Link></div> 
           <div className="n-item">Cart {state}</div>
        </div>
    )
}

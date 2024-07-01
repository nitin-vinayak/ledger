import React from "react";

import './Navbar.css'

export default function Navbar({items}) {
    function createNavItem(item, index){
        return <li key={index}> {item} </li>
    }
    return (
       <nav className="navbar">
        <ul>
            {items.map(createNavItem)}
        </ul>
       </nav>
    );
}   
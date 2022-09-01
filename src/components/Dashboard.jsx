import React, { useState } from "react";
import Shop from "./Shop";
import Stock from "./Stock";

export default function Dashboard({email,logout}) {

    const [showShop, setShowShop] = useState(false)
    const [showStock, setShowStock] = useState(false)

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    function shopWidget() {
        setShowStock(false)
        setShowShop(true)
        w3_close()
    }

    function stockWidget() {
        setShowShop(false)
        setShowStock(true)
        w3_close()
    }

    return (
        <>
            <div className="w3-sidebar w3-bar-block w3-border-right" style={{ display: 'none' }} id="mySidebar">
                <button onClick={w3_close} className="w3-bar-item w3-large">Close &times;</button>
                <button onClick={shopWidget} className="w3-bar-item w3-large w3-button">Shop</button>
                <button onClick={stockWidget} className="w3-bar-item w3-large w3-button">Stock</button>
            </div>
            <div className="w3-teal">
                <button className="w3-button w3-teal w3-xlarge" onClick={w3_open}>☰</button>
                <button className="w3-button w3-right w3-xlarge" onClick={logout}>Logout</button>
                <button className={(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))?'w3-button w3-right w3-small':'w3-button w3-right w3-xlarge'} >{email}</button>
            </div>
            <div>
                {showShop && <h1 className="w3-center w3-wide">Shop</h1>}
                {showStock && <h1 className="w3-center w3-wide">Stock</h1>}
                {showShop && <Shop />}
                {showStock && <Stock />}
            </div>
        </>
    )

}

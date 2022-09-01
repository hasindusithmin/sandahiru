
import React, { useEffect } from "react"

export default function Stock() {

    useEffect(()=>{
        if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) document.getElementById('stock').style.cssText = 'width:50%;margin:auto;'
    },[])

    function myFunction(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    return (
        <div className="w3-panel" id="stock">
        <div className="w3-row"></div>
        <div className="w3-row">
            <form action="" method="post" id="stock-form" autoComplete="off">
                <select type="text" name="name" id="name" className="w3-input w3-border">
                    <option value="">සහල් වර්ගය</option>
                    <option value="cvch2oxvd67a">සුදු කැකුලු</option>
                    <option value="cyvxr79tyra0">නාඩු</option>
                    <option value="uk7xjm999hr8">කිරි කැකුලු</option>
                    <option value="9i67encb1v8d">සම්බා කැකුලු</option>
                    <option value="8k6ozynjs94i">රතු කැකුලු</option>
                    <option value="ka9djip8jpux">රොස කැකුලු</option>
                    <option value="m7a1tjpn5kop">කිරි සම්බා (තම්බපු)</option>
                    <option value="b7d1t24s1so0">සම්බා (තම්බපු )</option>
                    <option value="vzcfi97dergx">කැඩුණු හාල්</option>
                    <option value="osga2vxf558b">බාස්මති</option>
                    <option value="c04cxemsgl7s">ආටාකාරිය</option>
                    <option value="qahb1872zu2a">සුවදැල්</option>
                    <option value="190qkh39lvb4">පච්චපෙරුමාල්</option>
                </select>
                <hr />
                <input type="button" onClick={()=>{myFunction('price')}} className="w3-input w3-border" value="Update Price" />
                <input type="number" name="price" className="w3-input w3-border w3-hide" placeholder="Price" id="price" />
                <hr />
                <input type="button" onClick={()=>{myFunction('qty')}} className="w3-input w3-border" value="Update Quantity" />
                <span id="qty" className="w3-hide">
                    <div className="w3-row">
                        <div className="w3-half">
                            <select type="text" name="bag" className="w3-input w3-border">
                                <option value="">Bag</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                            </select>
                        </div>
                        <div className="w3-half">
                            <input type="number" name="quantity" className="w3-input w3-border-0" placeholder="Quantity" />
                        </div>
                    </div>
                </span>
                <hr />
                <input type="submit" value="Save" className="w3-input w3-border" />
            </form>
        </div>
    </div>
    )
}
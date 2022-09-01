
import React from "react"
import { useEffect } from "react"

export default function Shop() {

    useEffect(()=>{
        if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i))) document.getElementById('shop').style.cssText = 'width:50%;margin:auto;'
    },[])


    return (
        <div className="w3-panel" id="shop">
            <div className="w3-row"></div>
            <div className="w3-row">
                <form action="" method="post" autoComplete="off">
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
                    <input type="number" className="w3-input w3-border" placeholder="Unit price" name="unit" id="unit-price" disabled />
                    <hr />
                    <input type="number" className="w3-input w3-border" placeholder="Price" id="price" name="price" disabled />
                    <hr />
                    <div className="w3-row">
                        <div className="w3-half">
                            <select type="text" name="bag" className="w3-input w3-border" id="shop-bag">
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
                    <hr />
                    <input type="submit" value="Save" className="w3-input w3-border" />
                </form>
            </div>
        </div>
    )
}
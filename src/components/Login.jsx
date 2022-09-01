
import React from "react"
import { useState } from "react"
export default function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        console.log({email,password});
    }

    return (
        <div className="w3-content w3-container w3-padding-64 w3-panel">
            <h3 className="w3-center">SANDAHIRU RICE MILL</h3>
            <p className="w3-center"><em>Rice Mill in hidogama</em></p>

            <div className="w3-row w3-padding-32 w3-section">
                <div className="w3-col m4 w3-container">
                    <img src="https://i.ibb.co/ZVK5FSS/sandahiru.jpg" className="w3-image w3-round" style={{width:'100%'}} alt="demo" />
                </div>
                <div className="w3-col m8 w3-panel">
                    <div className="w3-large w3-margin-bottom">
                        <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right w3-cursive"></i> Hidogama, Anuradhapura<br/>
                            <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +94 711915005<br/>
                                <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Web: <a href="https://sanda-hiru-rice-mills.business.site/">Link</a><br/>
                                </div>
                                <p>Already have an account?</p>
                                <form target="_blank" autoComplete="off" onSubmit={signIn}>
                                    <div className="w3-row-padding" style={{margin:'0 -16px 8px -16px'}}>
                                        <div className="w3-half">
                                            <input className="w3-input w3-border" type="email" placeholder="Email" required="" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
                                        </div>
                                        <div className="w3-half">
                                            <input className="w3-input w3-border" type="password" placeholder="Password" required="" name="password" value={password} onChange={e=>setPassword(e.target.value)}  />
                                        </div>
                                    </div>
                                        <button className="w3-button w3-black w3-right w3-section" type="submit">
                                            <i className="fa fa-paper-plane"></i> LOGIN
                                        </button>
                                </form>
                            </div>
                    </div>
                </div>
        
                )
}

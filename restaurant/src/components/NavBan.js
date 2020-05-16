import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


import '../styles/NavBan.css'

function NavBan() {
    return (
        <div className="NavBan">
            <div className="navigator">
                <h1>Logo</h1>
                <div className="nav-icons">
                    <FaTwitterSquare />
                    <FaInstagram />
                    <FaFacebook />
                </div>
            </div>
            <div
                className="background"
                style={{
                    backgroundImage:
                        `url("https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`
                }}>

            </div>

        </div>

    )

}




export default NavBan
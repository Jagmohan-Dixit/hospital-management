import './style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [show, setShow] = useState(false);

    useEffect( () => {
        const token = localStorage.getItem('token');
        if(token) {
            setShow(true);
        } else {
            setShow(false);
        }
    })
    return (
        <>
            <header class="header">

                <a href="/" class="logo"> <i class="fas fa-heartbeat"></i> JLN hospital</a>

                <nav class="navbar">
                    <a href="#home">home</a>
                    <a id="map" href="https://www.google.com/maps/place/JLN+hospital+ajmer,+Bajarang+garh+chouraha,+Rajasthan+305001/@26.469588,74.6347451,19z/data=!4m6!1m3!3m2!1s0x396be7015d1889a9:0xfffc702c8b91284b!2sJLN+Medical+College,+Kala+Bagh,+Ajmer,+Rajasthan+305001!3m1!1s0x396be7661b1dc9d3:0x16a46ec3a1016842?hl=en&source=lmns">Maps</a>
                    <a href="#services">services</a>
                    <a href="#about">about</a>
                    <a href="#doctors">doctors</a>
                    <a href="#book">book</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>
                    {show ? <Link to='/logout'>Logout</Link> :
                    <span>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                    </span>
                    }
                </nav>

                <div id="menu-btn" class="fas fa-bars"></div>

            </header>
        </>
    )
};

export default Navbar;
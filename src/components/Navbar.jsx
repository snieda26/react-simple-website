import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => {

        setClick(!click)
    }

    const showButton = () => {
        console.log(button)
        if (window.innerWidth >= 960) {
            setButton(true)
        } else {
            setButton(false)
        }
    }

    const onCloseMobileMenu = () => setClick(false)

    useEffect(() => {
        window.addEventListener('resize', showButton)
    }, [])


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={onCloseMobileMenu}>
                        SNIEDA
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" onClick={onCloseMobileMenu}>
                            <Link to="/" className="nav-links">Home</Link>
                        </li>
                        <li className="nav-item" onClick={onCloseMobileMenu}>
                            <Link to="/services" className="nav-links">Services</Link>
                        </li>
                        <li className="nav-item" onClick={onCloseMobileMenu}>
                            <Link to="/products" className="nav-links">Products</Link>
                        </li>
                        <li className="nav-item" onClick={onCloseMobileMenu}>
                            <Link to="/sign-up" className="nav-links-mobile">Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
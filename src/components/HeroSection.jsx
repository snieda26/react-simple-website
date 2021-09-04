import React from 'react'
import './HeroSection.css'
import Button from './Button'

function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>Welcome to SNIEDA!</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>

        </div>
    )
}

export default HeroSection

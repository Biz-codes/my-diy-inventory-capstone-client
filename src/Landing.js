import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default function Landing() {

    return (
        <div className="landing">

            <div className='hook'>
                <h4>Are you DIY-Fabulous?!</h4>
                <p>Of course you are!</p>
                <p>What about DIY-Organized?</p>
                <p>. . . . .</p>
                <p>When you start a project, do you find yourself scrambling to figure out what supplies you have around before you can get started?</p>
                <p>Do you ever get home from a supply run, only to realize that you overbought one thing but forgot to buy something else?</p>
                <p>Welcome to the virtual filing cabinet you have been needing to keep track of all your DIY supplies!</p>
                <p>Whether you are a DIY Builder, Crafter, Artiste, Gardener, Baker, etcetera, a My DIY Inventory account will lessen your stressin' when organizing your projects,</p>
                <p>freeing up your creative brain to enjoy</p>
                <h4>Doin' It Yourself!!!</h4>
            </div>
                
                
            <div className='landing-buttons' aria-live='polite'>
                    
                    <Link to='/dashboard'>
                        <button className="demo-button">Demo</button>
                    </Link>
                    <button className="landing-button">Sign Up (COMING SOON!)</button>
                    <button className="landing-button">Log In (COMING SOON!)</button>
            </div>
            
            <footer>
            <a href='https://www.freepik.com/photos/wood'>Wood photo created by gpointstudio</a>
            </footer>     
            
        </div>
    )
    
    
    
}

// , tools and projects
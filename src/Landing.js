import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default function Landing() {

    return (
        <div className="landing">
            <div className='hook'>
                <p>Are you DIY-Fabulous?!</p>
                <p>Of course you are!</p>
                <p>What about DIY-Organized?</p>
                <p>...</p>
                <p>When you start a project, do you find yourself scrambling to figure out what supplies you have around before you can get started?</p>
                <p>Do you ever get home from a supply run, only to realize that you overbought one thing but forgot to buy something else?</p>
                <p>Welcome to the virtual filing cabinet you have been needing to keep track of all your DIY supplies!</p>
                <p>Whether you are a DIY Builder, Crafter, Artiste, Gardener, Baker, etcetera, a My DIY Inventory account will lessen your stressin' when organizing your projects,</p>
                <p>freeing up your creative brain to enjoy</p>
                <p>Doin' It Yourself!!!</p>
            </div>
                
                
            <div className='content' aria-live='polite'>
                    <button className="big-buttons">
                        <Link to='/dashboard'>Demo</Link>
                    </button>
                    <button>Sign Up (COMING SOON!)</button>
                    <button>Log In (COMING SOON!)</button>
                </div>
            
                
            
        </div>
    )
    
    
    
}

// , tools and projects
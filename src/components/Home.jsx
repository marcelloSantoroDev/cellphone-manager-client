import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Home.css'


function Home() {
  return (
    <div className='home-container' >
        <h1>
          Welcome to your cellphone manager!
        </h1>
        <div className='link-container'>
        <Link className="link" to="/login">Login</Link>
        <Link className="link" to="/signup">Sign up</Link>
        </div>
    </div>
  )
}

export default Home
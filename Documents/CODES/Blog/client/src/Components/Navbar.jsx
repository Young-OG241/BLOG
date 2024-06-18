import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/blog.png"

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="container">
           <div className='logo'>
            <img src={Logo} alt=''/>
            </div> 
             
           <div className='links'>
            <Link className='link' to= "/?cat=art">
              <h5>ART</h5>
              </Link>

              <Link className='link' to= "/?cat=art">
              <h5>SCIENCE</h5>
              </Link>

              <Link className='link' to= "/?cat=art">
              <h5>DESIGN</h5>
              </Link>

              <Link className='link' to= "/?cat=art">
              <h5>SPORT</h5>
              </Link>
              <Link className='link' to= "/?cat=art">
              <h5>FOOD</h5>
              </Link>
              <span>Alex</span>
              <span>Logout</span>
              <span className='write'> 
                  <Link to="/write" className='link'> Write</Link>

              </span>
           </div>
       </div>
        
    </div>
  )
}

export default Navbar
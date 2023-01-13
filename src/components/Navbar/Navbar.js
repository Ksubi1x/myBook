import React from 'react'
import './Navbar.css'
import Hamburger from './hamburger/Hamburger'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div className='header'>

            <div className='headerMenu'>

                <h2 className='brandTitle'>myBook</h2>

                <div className='menuH'>

                    <ul className='linksH'>
                        <li>
                            <Link className='linkH' to='/home'>Home</Link>
                        </li>

                        <li>
                            <Link className='linkH' to='/friends'>Friends</Link>
                        </li>

                        <li>
                            <Link className='linkH' to='/messages'>Messages</Link>
                        </li>

                        <li>
                            <Link className='linkH' to='/create'>Create Post</Link>
                        </li>
                    </ul>
                </div>

                <Hamburger />

            </div>
                 
            
        </div>
    </div>
  )
}

export default Header
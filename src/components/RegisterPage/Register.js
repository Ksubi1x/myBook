import React from 'react'
import './Register.css'
import Input from '../input/Input'
import Dropdown from '../Dropdown1/Dropdown'
import Dropdown2 from '../Dropdown2/Dropdown2'
import Dropdown3 from '../Dropdown3/Dropdown3'
import Button2 from '../SignupButton/Button2'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <form className='registerForm'>
            <div className='registerTitle'>
                <div className='text'>
                    <h1>Sign Up</h1>
                    <p>It's quick and easy</p>
                </div>
                <Link to='/login' className='backLink'>X</Link>
            </div>

            <div className='line'></div>

            <div className='names'>
                <Input type='text' placeholder='First name' />
                <Input type='text' placeholder='Last name' />
            </div>

            <Input type='email' placeholder='Mobile number or email' />
            <Input type='password' placeholder='New password' />

            <div className='birthdayWrapper'>
                <p>Birthday</p>
                <div className='birthdaySelection'>
                    <Dropdown />
                    <Dropdown2 />
                    <Dropdown3 />
                </div>
            </div>
            
            <div className='psa'> <p>People who use our service may have uploaded your contact information to Facebook. <a href='#'>Learn more.</a> </p>
                <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
            </div>
            
            <div className='registerButton'>
                <Button2 text='Sign Up'/>
            </div>

           

            


        </form>
    </div>
  )
}

export default Register
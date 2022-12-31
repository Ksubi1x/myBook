import React from 'react'
import Input from '../input/Input'
import Button from '../Button/Button'
import Button2 from '../SignupButton/Button2'
import './Login.css'


const Login = () => {
  return (
    <div>
      <div className='loginContainer'>
        <div className='welcomeSection'>
          <img className='logo' src='/images/logo.svg'></img>
          <p className='message'>Connect with friends and the world around you on Facebook</p>
        </div>

        <div >
          <form className='formContainer'>
            <div className='loginSection'>
              <Input type='email' placeholder='Email or phone number' />
              <Input type='password' placeholder='Password' />
              <Button text='Log In' />
              <a className='resetLink' href='#'> Forgot password? </a>
              <div className='line'></div>
            </div>
            
            <div className='registerSection'>
              <Button2 text='Create new account' />
            </div>
          </form>

          <div className='businessPage'>
            <p ><a href='#'>Create a Page</a> for a celebrity, brand or business</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Login
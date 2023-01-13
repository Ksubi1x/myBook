import React from 'react'
import './HomePage.css'
import Navbar from '../Navbar/Navbar'
import Post from '../Post/Post'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  
  const [listOfPosts, setListOfPosts] = useState([])
  
  useEffect( () => {
    axios.get('http://localhost:3001/posts').then( (response) => {
      console.log(response.data)
      setListOfPosts(response.data)
    })
  }, [])
  

  return (
    <div>
      
      <div className='homePage'>
        
        <div className='postArea'>
          
          {listOfPosts.map((value,key) => {
            return <Post title={value.title} username={value.username} text={value.postText}/>
          })}
        </div>
        
      </div>

    </div>
  )
}

export default Home
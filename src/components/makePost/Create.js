import React from 'react'
import './Create.css'
import axios from 'axios'
import * as yup from 'yup'
import {useFormik} from 'formik'

const Create = () => {

    const Schema = yup.object().shape({
        username: yup.string().required(),
        title: yup.string().required(),
        postText: yup.string().required(),
    })

    const onSubmit = () => {
        console.log('Form Submitted')
        console.log(values)
    }

    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: "",
            username: "",
            postText: "",
        },
        
        validationSchema: Schema,
        onSubmit
        
    })

  return (
    <div className='makeContainer'>
        <form className='createPost' onSubmit={handleSubmit} >
            <h3> Create a post! </h3>
            <section className='inputs'>

                <div className='input'>
                    
                    <label>Username:</label>
                    <input id='username' value={values.username} onChange={handleChange} onBlur={handleBlur} type='text' className='input1'></input>
                
                </div>

                <div className='input'>
                    
                    <label>Title:</label>
                    
                    <input id='title' value={values.title} onChange={handleChange} onBlur={handleBlur} type='text' className='input1'></input>
                </div>

                <div className='input'>
                    <label>Message:</label>
                    
                    <textarea id='postText' value={values.postText} onChange={handleChange} onBlur={handleBlur} type='text' rows='5' className='input2'></textarea>
                </div>
            </section>
            <button type='submit' className='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Create
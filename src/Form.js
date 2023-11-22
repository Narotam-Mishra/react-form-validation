import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
  const[isSubmitted, setIsSubmitted] = useState(false);

  function submitForm(){
    setIsSubmitted(true)
  }

  return (
    <>
      <div className='form-container'>
        <span className="close-btn">X</span>
        <div className="form-content-left">
            <img src="https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&w=600" alt="spaceship" className='form-img' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
}

export default Form
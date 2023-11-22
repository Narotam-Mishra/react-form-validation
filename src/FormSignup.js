import React from 'react'
import useFormValidation from './useFormValidation';
import ValidateInfo from './ValidateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useFormValidation(submitForm, ValidateInfo);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Your account by filling out the information below.</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              id='username'
              placeholder="Enter your username"
              className="form-input"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              id='email'
              placeholder="Enter your email"
              className="form-input"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              id='password'
              placeholder="Enter your password in this form Abc@123"
              className="form-input"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id='confirmPassword'
              placeholder="Confirm your password"
              className="form-input"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button className="form-input-btn" type='submit'>Sign up</button>
        <span className="form-input-login">
            Already have an account? Login <a href="/#">here</a>
        </span>
      </form>
    </div>
  );
}

export default FormSignup
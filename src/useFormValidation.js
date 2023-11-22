import { useEffect, useState } from "react";

const useFormValidation = (callback, validate) => {
  const[values, setValues] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const[errors, setErrors] = useState({});
  const[isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({
        ...values,
        [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
        callback();
    }
  }, [callback, isSubmitting, errors]);

  return {handleChange, values, handleSubmit, errors};
}

export default useFormValidation
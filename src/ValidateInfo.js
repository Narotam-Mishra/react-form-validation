
const ValidateInfo = (values) => {
  let errors = {};

  if(!values.username.trim()){
    errors.username = 'Username required'
  }else if(values.username.length < 3){
    errors.username = 'Username must be at least 3 characters'
  }

  if(!values.email){
    errors.email = 'Email required'
  }else if (!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = 'Email address is invalid'
  }

  if(!values.password){
    errors.password = 'Password is required'
  }else if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/.test(values.password)){
    errors.password = 'Invalid Password'
  }

  if(!values.confirmPassword){
    errors.confirmPassword = 'Confirm password is required'
  }else if(values.confirmPassword !== values.password){
    errors.confirmPassword = 'Passwords not matched'
  }

  return errors;
}

export default ValidateInfo;
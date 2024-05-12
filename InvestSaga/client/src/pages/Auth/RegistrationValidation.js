export const validateRegistrationForm = (name, email, password, phone, age, answer) => {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Name is required";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (!phone.trim()) {
    errors.phone = "Phone is required";
  } 
  else if (!/^\d{10}$/.test(phone)) {
    errors.phone = "Phone number must be 10 digits";
  }

  if(!age.trim()){
    errors.age = 'Age is required';
  }
  else if(age < 21 || age >65){
    errors.age = 'Age should be between 21 to 65'
  }
  if (!answer.trim()) {
    errors.answer = "Answer is required";
  }

  return errors;
};

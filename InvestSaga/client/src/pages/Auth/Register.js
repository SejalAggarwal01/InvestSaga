import React ,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'; // to redirect
import axios from 'axios';
import { validateRegistrationForm } from './RegistrationValidation';
const Register = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [age,setAge]=useState("")
    const [answer,setAnswer]=useState("")
    const navigate=useNavigate()

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateRegistrationForm(name, email, password, phone, age, answer);
        if (Object.keys(errors).length > 0) {
            Object.values(errors).forEach(error => toast.error(error));
            return;
        }
        try{
            //we will handle api request
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
            {name,email,password,phone,age,answer}
            );
            if(res && res.data.success){
                toast.success("Registered Successfuly please login");
                navigate('/login');
            }else{
                toast.error(res.data.message);
            }
        }catch(err){
            console.log(err)
            toast.error('Something went wrong')
        }
    };

  return (
    <Layout>
        <div className='register'>
            <h1>Register Page</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="form-control" 
                        id="exampleInputName1" 
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="text" 
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        className="form-control" 
                        id="exampleInputPhone1" 
                        placeholder="Enter your phone"
                        required
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="text" 
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                        className="form-control" 
                        id="exampleInputAddress1" 
                        placeholder='Age'
                        required
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="text" 
                        value={answer}
                        onChange={(e)=>setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputAddress1" 
                        placeholder='What is your favourite dish name?'
                        required
                    />
                </div>
                
                <button type="submit" className="btn-primary">Submit</button>
            </form>

        </div>
    </Layout>
  );
};

export default Register

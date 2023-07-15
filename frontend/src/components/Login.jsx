import React, { useState } from "react";    
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hope from '../assets/hope1.png';
import Bg from '../assets/bg.png';

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

   

    const navigatetoRegister = () => {
        navigate('/register')
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000");
            if (response.ok) {
                const data = await response.json();
                const user = data.find((u) => u.username === username && u.password === password);
                if (user) {
                    console.log('Authentication successful.');
                    localStorage.setItem('token','8#jnkdfgjk9734445983859435943859udfjbg9384tgjfdb983jkfdgbjk')
                    
                    toast.success("You have Successfully Logged In")

                    setTimeout(() => {
                        navigate('/donate');
                        
                    }, 2000);
                } else {
                    console.log('Authentication failed.');
                }
            } else {
                console.log('Authentication failed.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };
    
    return (
        <div className='absolute  w-full h-full bg-[#DAF5FF] '>
        <div className=' w-full h-[600px] md:mt-[200px] md:h-[600px] :w-full flex flex-auto  mx-auto mt-[100px] border border-black-200 shadow-lg lg:w-[800px] ' >
        <div className='relative w-1/2 h-full flex flex-col bg-white '>
        <img src={Hope} alt='' className='h-full object-cover'/>
        </div>
        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 justify-between md:p-20'>
          <div className='w-full flex max-w-[550px]'></div>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-4 text-[#1D267D]  '>Login</h3>
            <p className='text-base mb-2  text-[#1D267D] ' >Happy to see you back!</p>
          </div>
          <div className='w-full flex flex-col ' onSubmit={handleSubmit}><form>
            <input className='w-full text-[#1D267D] my-2  border-b border-black rounded-lg   py-4 ' value={username} type="username" onChange={handleUsernameChange}  placeholder="username" required></input>
            <input className='w-full text-[#1D267D] border-b border-black  py-4 ' value={password} onChange={handlePasswordChange} type="password"  placeholder="********" required></input>
            <button className='w-full bg-[#1D267D] rounded-md text-white p-4 text-center  mt-4'>Login</button></form>
          </div>
          <div className='w-full flex items-center justify-between p-1'>
          </div>
          <div className='w-full flex items-center justify-center'><p className='text-sm font-normal text-[#1D267D]'>Dont have an Account? <span className='font-semibold underline underline-offset-2 cursor-pointer' onClick={navigatetoRegister}>Sign up</span></p></div>
        </div>
    </div>
    </div>
    )
};

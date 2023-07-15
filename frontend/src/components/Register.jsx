import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import Hope from '../assets/hope1.png'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [username, setUserName] = useState('');

    const navigate = useNavigate();

    const navigatetologin=()=>{
      navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, username, password };
        try {
            const response = await fetch('http://127.0.0.1:8000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                navigate('/login');
            } else {
                console.log('Registration failed.');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
    return (
      <div className='absolute  w-full h-full bg-[#DAF5FF] '>
      <div className=' w-full h-[600px] md:mt-[200px] md:h-[600px] :w-full flex flex-auto  mx-auto mt-[100px] border border-black-200 shadow-lg lg:w-[800px] ' >
      <div className='relative w-1/2 h-full flex flex-col bg-white '>
      <img src={Hope} alt='' className='h-full object-cover'/>
      </div>
      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 justify-between md:p-20 '>
          <div className='w-full flex max-w-[550px]'></div>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-4 text-[#1D267D]'>Register</h3>
            <p className='text-base mb-2  text-[#1D267D]' >Hey! Fill up to Register </p>
          </div>
          <div className='w-full flex flex-col' onSubmit={handleSubmit}><form>
            <input className='w-full text-black  my-2  outline-none focus:outline-none py-4 ' value={username} onChange={(e) => setUserName(e.target.value)}name="username" id="username" placeholder="Username" required></input>
            <input className='w-full text-black   outline-none focus:outline-none py-4 ' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" required></input>
            <input className='w-full text-black   outline-none focus:outline-none py-4 ' value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password" required></input>
            <button className='w-full bg-[#1D267D] rounded-md text-white p-4 text-center  mt-4'>Register</button></form>
          </div>

          <div className='w-full flex items-center justify-center   '><p className='text-sm font-normal text-[#1D267D] p-2   '>Already have an Account? <span className='font-semibold underline underline-offset-2 cursor-pointer ' onClick={navigatetologin}>Sign in</span></p></div>
        </div>
    </div></div>
   
    )
}

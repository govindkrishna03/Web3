import React , {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import defaultImage from '../assets/profile.jpeg';


function  UploadDetails(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[age,setAge] = useState("");
    const[problem,setProblem] = useState("");
    const[amount,setAmount] = useState("");
    const[upi,setUpi] = useState(" ");
    const[image,setImage] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async(event)=>{
        event.preventDefault();
        const user ={name,email,age,problem,amount,upi};
        if (!image) {
          setImage(defaultImage); // Set the default image URL
        }
    
        const formData = new FormData();
        formData.append('image', image);
        for (const key in user) {
            formData.append(key, user[key]);
        }
        try{
            const response = await fetch('http://127.0.0.1:8000/posting/', {
                method:"POST",
                body:formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Success:',data);
                navigate('/donate')
            }
            else{
                console.log('Registration Failed')
            }
        }
        catch(error){
            console.log('Error:',error);
        }
    };
    

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };    

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden  bg-[#daf5ffe3]  ">
     <div className="w-full p-20 m-auto bg-white bg-opacity- rounded-md  shadow-lg lg:max-w-xl ">
      
        <h2 className="text-3xl font-semibold text-center text-blue-600  uppercase">Upload Your Details Here</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
          <label className=''>Name:</label>
          <input 
            className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-100 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40'
            type='text' 
            value={name} 
            name='name'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="">
          <label className=''>Age:</label>
          <input 
            className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-100 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40'
            type='text' 
            value={age} 
            name='age'
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div className="">
          <label className=''>Email:</label>
          <input 
            className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-100 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40'
            type='email' 
            value={email} 
            name='email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="">
          <label className=''>Problem:</label>
          <input
            className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-100 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40'
            type='text'
            value={problem} 
            name='problem'
            onChange={(event) => setProblem(event.target.value)}
          />
        </div>
        <div className="">
          <label className=''>Amount:</label>
          <input 
            className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-100 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40'
            type='text' 
            value={amount} 
            name='amount'
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="">
          <label className=''>UPI:</label>
          <input 
            className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-gray-100 border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40'
            type='text' 
            value={upi} 
            name='upi'
            onChange={(event) => setUpi(event.target.value)}
          />
        </div>
        <div className="">
          <label className=''>Image:</label>
          <input 
            className=''
            accept='image/png,image/jpeg'
            type='file'
            name='image'
            onChange={handleImageChange}
          />
        </div>
        <div className='flex justify-center items-center'>
  <button className='hover:bg-green-500 bg-red-500 text-white py-2 px-4 rounded' type="submit">Submit</button>
</div>

      </form>
    </div>
  </div>
  

   
   
  );

  }
  export default UploadDetails;
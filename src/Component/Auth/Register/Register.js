import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleImg from '../../../assest/2702602.png'
import { AuthContex } from '../../UserContext/UserContext';
const Register = () => {
    const {createuser,googleSignIn,userUpdate}=useContext(AuthContex)
    const navigate=useNavigate()
    const location=useLocation()
    const from = location.state?.from?.pathname || '/'
    const handlesingup=(e)=>{ 
        e.preventDefault();
        const form = e.target;
        const name=form.target.value;
        const email = form.email.value;
        const password = form.password.value;
        const confrim=form.confrim.value;
        if(password.length<6){
            toast.success('Password at least 6 character', { autoClose: 500 })
            return
        }
        if(password!==confrim){
            toast.warning('Password Did not match', { autoClose: 500 })
            return
        }
        createuser(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            form.reset()
            handleUpdate(name)
            toast.success('User Created Succesfully', { autoClose: 500 })
        })
        .then(error=>console.log(error))
    
    }
    const handlegoogleSignIN=()=>{
     
        googleSignIn()
        .then(result=>{
            navigate(from, {replace: true})
            toast.success('User Login Succesfully', { autoClose: 500 })
        })
    }
    const handleUpdate=(name)=>{
        const profile={
            displayName:name
        }
        userUpdate(profile)
        .then(()=>{})
        .then((error)=>console.log(error))
    }
    return (
        <>
        <ToastContainer position='top-center'></ToastContainer>
 <h3 className='text-2xl text-center font-bold text-slate-600'>Get started for free Register!</h3>
     <div className=" mt-5 mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm">
         <form onSubmit={handlesingup}>
         <div className="form-group mb-6">
                 <label htmlFor="exampleInputEmail2" name="name" className="form-label inline-block mb-2 text-gray-700">Name</label>
                 <input type="text" name='name' className="form-control
 block
 w-full
 px-3
 py-1.5
 text-base
 font-normal
 text-gray-700
 bg-white bg-clip-padding
 border border-solid border-gray-300
 rounded
 transition
 ease-in-out
 m-0
 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                     aria-describedby="emailHelp" placeholder="Enter Name" required />
             </div>

             <div className="form-group mb-6">
                 <label htmlFor="exampleInputEmail2" name="email" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                 <input type="email" name='email' className="form-control
 block
 w-full
 px-3
 py-1.5
 text-base
 font-normal
 text-gray-700
 bg-white bg-clip-padding
 border border-solid border-gray-300
 rounded
 transition
 ease-in-out
 m-0
 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                     aria-describedby="emailHelp" placeholder="Enter email" required />
             </div>
             <div className="form-group mb-6">
                 <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                 <input type="password" name="password" className="form-control block
 w-full
 px-3
 py-1.5
 text-base
 font-normal
 text-gray-700
 bg-white bg-clip-padding
 border border-solid border-gray-300
 rounded
 transition
 ease-in-out
 m-0
 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                     placeholder="Password" required/>
             </div>
             <div className="form-group mb-6">
                 <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Confirm Password</label>
                 <input type="password" name="confrim" className="form-control block
 w-full
 px-3
 py-1.5
 text-base
 font-normal
 text-gray-700
 bg-white bg-clip-padding
 border border-solid border-gray-300
 rounded
 transition
 ease-in-out
 m-0
 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword3"
                     placeholder="Confirm Password" required/>
             </div>
             <div className="flex justify-between items-center mb-6">
                
                 <a href="#!"
                     className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                     password?</a>
             </div>
             <button  type="submit" className="w-full px-6 py-2.5 bg-orange-400 text-white font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out">Register</button>
             <p className="text-gray-800 mt-6 text-center">Already have an account? <Link to="/login"
                 className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Login</Link>
             </p>
         </form>

     </div>
     <div className="hrstyle flex justify-start justify-center items-center">
     <hr className='h-1 bg-orange-400 mt-4 w-[10%] '></hr>
     <h3>OR</h3>
     <hr className='h-1 bg-orange-400 mt-4 w-[10%]'></hr>
     </div>
     <div onClick={handlegoogleSignIN} className="cursor-pointer signWithGoogle bg-orange-400 rounded-lg flex justify-around mx-auto w-40 border p-4 mt-2">
         <img className="w-[20%]" src={googleImg} alt="" />
          <h3 className='ml-4 text-2xl font-semibold'>Google </h3>
     </div>
 </>
    );
};

export default Register;
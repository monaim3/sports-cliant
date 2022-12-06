import React, { useContext, useEffect } from 'react';
import { AuthContex } from '../UserContext/UserContext';
import { toast, ToastContainer } from 'react-toastify';

const Review = ({singleData}) => {
    console.log(singleData);
    const {user}=useContext(AuthContex)
    
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value ;
        const email = user?.email || 'unregistered';
       
        const message = form.review.value;

        const order = {
            service: singleData._id,
            TeamName: singleData.name,
            email,
            message,
            date:new Date()
        }

        fetch('https://sports-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Review submit Succesfully', { autoClose: 500 })
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
   
    return (
        <>
        <h2 className='text-2xl text-center font-bold'>Share your Opinion</h2>
          <div className='w-32 mx-auto mt-4'><img src={user?.photoURL} alt="" /></div>
          <div className="w-60 mx-auto mt-6">
          <form action="" onSubmit={handleReview}>
          <label for="name">Name:</label>
          <input type="text"  defaultValue={singleData.name} name="username"placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br></br>
          <label for="email">Email:</label>
          <input type="email" readOnly value={user?.email} name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br></br>
        
          
          <label for="review">Review:</label>
          <textarea className="textarea  input-bordered w-full max-w-xs" placeholder="Review" name="review"></textarea><br></br>
           <input type="submit" value="Submit" className='btn btn-primary bg-cyan-400'/>
            </form>  
          </div>
          <ToastContainer></ToastContainer>
        </>
    );
};

export default Review;
import React, { useContext, useState } from 'react';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContex } from '../UserContext/UserContext';
import { toast, ToastContainer } from 'react-toastify';
const Reviewtable = ({ item, handelete, handleEdit }) => {
    const { user } = useContext(AuthContex)
    const [updateReview,setUpdateReview]=useState({})
    console.log(updateReview);
    const { _id, message, email, customerName, TeamName, service } = item;

    const handleEditReview = (event) => {
        event.preventDefault();
        fetch(`https://sports-server.vercel.app/review/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success('User Update Succesfully', { autoClose: 500 })
                console.log(data);
            }
            
        })
    }
    const handleInput=(event)=>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...updateReview}
      
        newReview[field] = value;
        setUpdateReview(newReview);
    }
  
    return (
        <>
            <tr className=''>

                <td>{TeamName}</td>
                <td> {email}</td>
                <td  style={{  width:'52px', height:"50px", overflow: 'scroll', }}>{message}</td>
                <td><label htmlFor={`my-modal-${_id}`} className="btn"><FontAwesomeIcon className='text-orange-400' icon={faEdit} onClick={() => handleEdit(_id)}></FontAwesomeIcon></label></td>
                <td><FontAwesomeIcon className='text-orange-400' icon={faTrash} onClick={() => handelete(_id)}></FontAwesomeIcon></td>

            </tr>
            {/* Modal Area */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            
           
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" id="hiddens" >✕</label>
                    <div className="w-60 mx-auto mt-6">
                        <form action="" onSubmit={handleEditReview}>
                            <label for="name">TeamName:</label>
                            <input type="text" onBlur={handleInput} defaultValue={TeamName} name="TeamName" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br></br>
                            <label for="email">Email:</label>
                            <input type="email"  onBlur={handleInput} defaultValue={user?.email} name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br></br>
                            <label for="review">Review:</label>
                            <textarea className="textarea  input-bordered w-full max-w-xs" onBlur={handleInput} defaultValue={message} placeholder="Review" name="message"></textarea><br></br>
                            <input type="submit" value="Submit" className='btn btn-primary bg-cyan-400' /> 
                            <div className="modal-action mt-[-20%]">
                                <label htmlFor={`my-modal-${_id}`} className="btn">Close</label>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Reviewtable;
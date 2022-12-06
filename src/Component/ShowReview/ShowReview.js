import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Reviewtable from '../Reviewtable/Reviewtable';
import { AuthContex } from '../UserContext/UserContext';

const ShowReview = () => {
    const [review,setReview]=useState([])
    console.log(review);
    const { user, logOut } = useContext(AuthContex);
    useEffect(() => {
        fetch(`https://sports-server.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReview(data);
            })
    }, [user?.email, logOut])
    const handelete=(id)=>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`https://sports-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('Review Delete Succesfully', { autoClose: 500 })
                    const remaining = review.filter(revw => revw._id !== id);
                    setReview(remaining);
                }
            })
        }
        
    }
    const handleEdit=()=>{

    }
    useEffect(()=>{
        document.title="Review"
    })
    return (
        <>
        <div>
            <div className="overflow-x-auto mt-10">
                <table className="table table-auto w-full md:table-fixed">

                    <thead className=''>
                        <tr>
                            
                            <th>Team Name</th>
                            <th>Email</th>
                            <th>Review</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {review.map((item) => <Reviewtable handelete={handelete} handleEdit={handleEdit} item={item} key={item._id}></Reviewtable>)}
                    </tbody>
                </table>
            </div>
        </div>
        <ToastContainer></ToastContainer>
        </>
    );
};

export default ShowReview;
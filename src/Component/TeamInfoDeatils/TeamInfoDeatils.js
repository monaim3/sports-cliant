import React , { useContext } from 'react';
import { useParams, useLoaderData, Link } from 'react-router-dom';
import Review from '../Review/Review';
import { AuthContex } from '../UserContext/UserContext';
const TeamInfoDeatils = () => {
    const singleData = useLoaderData()
    const {user}=useContext(AuthContex)
    return (
        <>

            <div className="deatilstext flex gap-7 p-8 ">
                <div className="img-wrapper w-full">
                    <img src={singleData.img} alt="" />
                </div>
                <div className="text">
                    <h2 className='text-2xl mb-4'>{singleData.name}</h2>
                    <h2 className='text-2xl mb-4'>price:{singleData.price}</h2>
                    <h2>{singleData.description}</h2>

                </div>
            </div>
            {user?.email?
                <div className="review-section mt-6 p-4">
                    <Review singleData={singleData}></Review>
                </div>
                :
                <div className="w-32 mx-auto"><Link to="/login"> <button className=" btn bg-cyan-400">Please Login</button></Link></div>
            }
        </>
    );
};

export default TeamInfoDeatils;
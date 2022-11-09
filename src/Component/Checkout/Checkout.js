import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const premimum=useLoaderData()
  
    return (
        <div className='w-50 mx-auto mt-6 flex justify-evenly items-center'>
            <div> <img className='' src="" alt="" /></div>
           <div>
            <h3 className='text-2xl mb-4'>Your selected Course : {premimum.name}</h3>
           <Link to='/courses'><button className="btn bg-orange-400">Buy More</button>
            </Link>
           </div>
        </div>
    );
};

export default Checkout;
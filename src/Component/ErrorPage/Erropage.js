import React from 'react';
import { Link } from 'react-router-dom';

const Erropage = () => {
    return (
        <div className=' w-15 mx-auto mt-5'>
            <h3>This Page is not Found</h3><br></br>
             <div>
             <Link to='/'>Go back Home</Link>
             </div>
        </div>
    );
};

export default Erropage;
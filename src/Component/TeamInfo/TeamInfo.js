import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TeamCard from '../TeamCard/TeamCard';

const TeamInfo = () => {
   const [Teams,setTeam]=useState([])
    
     useEffect(()=>{
        fetch('https://sports-server.vercel.app/sports')
        .then(res=>res.json())
        .then(data=>setTeam(data.slice(0,3)))
     })
    return (
        <>
         <div className="teamcard grid lg:grid-cols-3 gap-5 p-12">
           {Teams.map(team=><TeamCard team={team}></TeamCard>)}
         </div>
         <div className='w-30 mx-auto text-center'>
         <Link to='/allcard'><button className="btn bg-cyan-400 " >See All</button></Link>
         </div>
        </>
    );
};

export default TeamInfo;
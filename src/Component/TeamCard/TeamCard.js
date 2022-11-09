import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const TeamCard = ({ team }) => {
    return (

        <div className="card w-80 bg-base-100 shadow-xl ">
            <p>{team.length}</p>
            <figure className="px-10 lg:pt-10">
                <PhotoProvider>
                    <PhotoView src={team.img}>
                        <img src={team.img} alt="Shoes" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-start ">
                <h2 className="card-title">{team.name}</h2>
                <p>Price: {team.price}</p>
                <p className='items-start'>{team.description.slice(0, 100)}</p>
                <div className="card-actions">
                    <Link to={`/teamDeatils/${team._id}`}> <button className="btn bg-cyan-400" >Read More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
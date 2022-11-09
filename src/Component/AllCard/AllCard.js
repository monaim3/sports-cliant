import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const AllCard = () => {
    const allcardData = useLoaderData()

    return (
        <>
            {allcardData.length > 0 ?
                <div className="allcardItem grid lg:grid-cols-3 gap-8 p-12">
                    {
                        allcardData.map(card => {
                            return (
                                <div className="card w-80 bg-base-100 shadow-xl ">
                                    <p>{card.length}</p>
                                    <figure className="px-10 lg:pt-10">
                                        <PhotoProvider>
                                            <PhotoView src={card.img}>
                                            <img src={card.img} alt="Shoes" className="rounded-xl" />
                                            </PhotoView>
                                        </PhotoProvider>
                                       
                                    </figure>
                                    <div className="card-body items-start ">
                                        <h2 className="card-title">{card.name}</h2>
                                        <p>Price: {card.price}</p>
                                        <p className='items-start'>{card.description}</p>
                                        <div className="card-actions">
                                            <Link to={`/teamDeatils/${card._id}`}> <button className="btn bg-cyan-400" > More Deatils</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                : <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            }
        </>
    );
};

export default AllCard;
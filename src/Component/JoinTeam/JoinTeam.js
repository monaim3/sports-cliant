import React from 'react';
import hero from '../../../src/assest/hero-player.png'
const JoinTeam = () => {
    return (
        <>
        <div className='p-8 pl-24 bg-gray-300 join-team lg:flex justify-around mt-24 items-center'>
            <div className="join-text-area lg:w-[70%] px-8">
                <h2 className='bg-cyan-400 p-6 w-52 text-white'>JOIN OUR TEAM</h2>
                <p className='mt-6 text-3xl font-bold'>TALK WITH YOUR FEET. PLAY WITH YOUR HEART.</p>
                <p className='mt-4 text-base'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.</p>
                <button className=" mt-6 btn btn-outline bg-cyan-400">Join Now</button>
            </div>
            <div className="join-img ">
                <img className="w-[50%] lg:w-[30%] h-[20%] mt-12 lg:mx-72 " src={hero} alt="" />
            </div>
        </div>
        </>
    );
};

export default JoinTeam;
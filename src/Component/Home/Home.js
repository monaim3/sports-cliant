import React, { useEffect } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import JoinTeam from '../JoinTeam/JoinTeam';
import LatestNews from '../LatestNews/LatestNews';
import TeamInfo from '../TeamInfo/TeamInfo';

const Home = () => {
    useEffect(()=>{
        document.title="Home"
    })
    return (
        <div>
         <HeroSection></HeroSection>
         <TeamInfo></TeamInfo>
         <JoinTeam></JoinTeam>
         <LatestNews></LatestNews>
        </div>
    );
};

export default Home;
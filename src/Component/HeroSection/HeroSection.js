import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
    return (
      
     <>
        <section className="mb-40 overflow-hidden">
          <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%', backgroundImage: 'url(https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)',
          height: '500px'}}>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Winning is a habit, Success is a choice.<br /><span>Never Say it’s Just a Game</span></h1>
                  <a className="inline-block px-7 py-3 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                  <a className="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10" style={{height: "50px", transform: 'scale(2)', transformOrigin: "top center", color: "#fff"}}>
            <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
            </svg>
          </div>
        </section>
  

     </>
     
    );
};

export default HeroSection;
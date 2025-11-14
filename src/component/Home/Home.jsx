import React, { useEffect } from 'react';
import Banner from './Banner';
import ModelsCard from './ModelsCard';


const Home = () => {
       useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <ModelsCard></ModelsCard>
        </div>
    );
};

export default Home;
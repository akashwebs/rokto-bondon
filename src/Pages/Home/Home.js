import React from 'react';
import Header from '../../Shared/Header';
import Banner from './Banner/Banner';
import BestBloodDonner from './BestBloodDonner';
import Serach from './Serach';

const Home = () => {
    return (
       <>
       <Header></Header>
       <Banner></Banner>
       <Serach></Serach>
       <BestBloodDonner></BestBloodDonner>
       </>
    );
};

export default Home;
import React from 'react';
import Clients from '../Clients/Clients';
import Package from '../Packages/Package';
import MiddlePart from '../Parts/MiddlePart';
import Profile from '../Profile/Profile';
import Island from '../Island/island';

const Home = () => {
    return (
        <div>
            <Profile/>
            <MiddlePart/>
            <Package/>
            <Island/>
            <Clients/>
          
        </div>
    );
};

export default Home;
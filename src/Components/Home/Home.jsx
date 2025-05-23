import React from 'react';
import Carohome from './Carohome';
import FutureRecipe from './FutureRecipe';
import RelatedCollection from './RelatedCollection';
import Toprecipe from './Toprecipe';

const Home = () => {
    return (
        <div>
            <Carohome></Carohome>
            <Toprecipe></Toprecipe>
            <FutureRecipe></FutureRecipe>
            <RelatedCollection></RelatedCollection>
        </div>
    );
};

export default Home;
import React from 'react';
import Carohome from './Carohome';
import FutureRecipe from './FutureRecipe';
import RelatedCollection from './RelatedCollection';
import Toprecipe from './Toprecipe';
import Cats from '../Cats';
import Carossel from './Carossel';
import RecipeCate from '../RecipeCate';



const Home = () => {
    return (
        <div>
            <Carossel></Carossel>
            <Toprecipe></Toprecipe>
            <RecipeCate></RecipeCate>
            <Cats></Cats>
        </div>
    );
};

export default Home;

{/* <FutureRecipe></FutureRecipe>
<RelatedCollection></RelatedCollection> */}
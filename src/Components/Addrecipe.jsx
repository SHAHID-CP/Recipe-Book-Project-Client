import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Addrecipe = () => {
    const {user}= use(AuthContext);

    const hundleRecipe= e=>{
        e.preventDefault();

        const breack=e.target.breackfast.checked;
        const lunch=e.target.lunch.checked;
        const dinner=e.target.dinner.checked;
        const dessert=e.target.dessert.checked;
        const vegan=e.target.vegan.checked;
        const category=[];
        if(breack){
            const newData='Breackfast';
            category.push(newData)
        }
        if(lunch){
            const newData='Lunch';
            category.push(newData)
        }
        if(dinner){
            const newData='Dinner';
            category.push(newData)
        }
        if(dessert){
            const newData='Dessert';
            category.push(newData)
        }
        if(vegan){
            const newData='Vegan';
            category.push(newData)
        }


        const image=e.target.photurl.value;
        const title=e.target.titlee.value;
        const ingredients=e.target.ingredients.value;
        const instructions=e.target.instructions.value;
        const quisine=e.target.quisine.value;
        const preparetiontime=e.target.preparetiontime.value;
        const likecount=parseInt(e.target.likecount.value);
        const ownerEmail=user?.email;
        
        

        const newRecipe={
            image,
            title,
            ingredients,
            instructions,
            quisine,
            preparetiontime,
            likecount,
            ownerEmail,
            category
        }

        fetch('https://my-recipe-server-nine.vercel.app/recipe',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newRecipe)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.insertedId){
                e.target.reset()
                toast("Recipe add successfully");
            }
        })
        
        
        
    }
    return (
        <div className='my-12'>
            

            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center'>Recipe add</h2>



            <form onSubmit={hundleRecipe} className=' p-2 rounded-2xl  bg-gradient-to-br from-[#ffe6e7] via-[#fff4ec] to-[#fef9c9]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

                    <fieldset className="fieldset  p-2">
                        <label className="label">Photo Url</label>
                        <input type="text" name='photurl' className="input w-full" placeholder="Photo url" required />
                    </fieldset>
                    <fieldset className="fieldset  p-2">
                        <label className="label">Title</label>
                        <input type="text" name='titlee' className="input w-full" placeholder="Title" required />
                    </fieldset>
                    <fieldset className="fieldset  p-2">
                        <label className="label">Ingredients</label>
                        <input type="text" name='ingredients' className="input w-full" placeholder="Ingredients" required/>
                    </fieldset>
                    <fieldset className="fieldset  p-2">
                        <label className="label">Instructions</label>
                        <input type="text" name='instructions' className="input w-full" placeholder="Instructions" required/>
                    </fieldset>

                    <fieldset className="fieldset  p-2">
                        <label className="label">Quisine Type</label>
                        <select className='bg-white p-2 rounded-l-sm' name='quisine'>
                                <option value="Italian">Italian</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Indian">Indian</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Others">Others</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset  p-2">
                        <label className="label">Preparetion time</label>
                        <input type="number" min='0' name='preparetiontime' className="input w-full" placeholder="Preparetion time" />
                    </fieldset>


                    <fieldset className="fieldset p-2 ">
                        <p className='text-gray-500'>
                            Categories
                        </p>
                        <div className='flex justify-between'>
                            <div className="flex items-center">

                        <input type="checkbox" name="breackfast" value="Breackfast" className="h-4 w-4 text-blue-600 border-gray-300 rounded"/>
                        <label  className="ml-2 text-sm label">
                            Breackfast
                        </label>
                        </div>
                        <div className="flex items-center"> 
                        <input type="checkbox" name="lunch" value="Lunch" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        <label  className="ml-2 text-sm label">
                            Lunch
                        </label>
                        </div>
                        <div className="flex items-center"> 
                        <input type="checkbox" name="dinner" value="Dinner" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        <label  className="ml-2 text-sm label">
                            Dinner
                        </label>
                        </div>
                        <div className="flex items-center"> 
                        <input type="checkbox" name="dessert" value="Dessert" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        <label  className="ml-2 text-sm label">
                            Dessert
                        </label>
                        </div>
                        <div className="flex items-center"> 
                        <input type="checkbox" name="vegan" value="Vegan" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        <label  className="ml-2 text-sm label">
                            Vegan
                        </label>
                        </div>
                        </div>

                    </fieldset>

                    <fieldset className="fieldset  p-2">
                        <label className="label">Like Count</label>
                        <input type="number" min='0' max='0' name='likecount' value='0' className="input w-full" placeholder="like Count" />
                    </fieldset>

                </div>
                
                <input type="submit" className='btn w-full' value="Add Recipe" />
            </form>

        </div>
    );
};

export default Addrecipe;
import React, { useState } from 'react';
import useFetch from '../../hooks/Usefetch';
import Card from '../card/Card';

const Recipes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const recipes = useFetch('/recipes');

    // Filter recipes based on the search query
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='max-w-[1440px] w-full my-0 mx-auto px-[50px]'>
            <div className="recipes__wrapper">
                <h2 className='font-bold text-[32px] text-center'>Our Recipes</h2>

                {/* Search Input */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="recipes__cards grid grid-cols-5 w-full gap-[20px] mt-[20px]">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe) => (
                            <Card key={recipe.id} product={recipe} />
                        ))
                    ) : (
                        <p className="text-center col-span-5">No recipes found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recipes;
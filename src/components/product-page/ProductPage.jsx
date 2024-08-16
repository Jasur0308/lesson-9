import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiInstance from '../../api/axios';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await apiInstance(`/recipes/${id}`); // Fetch product data based on the ID
                setProduct(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="relative min-h-screen flex items-center justify-center bg-gray-200">
                <div className="absolute inset-0 bg-cover bg-center py-[20px]" 
                     style={{ backgroundImage: 'url(https://c8.alamy.com/comp/KM7NKB/baking-background-fresh-ingredients-for-baking-on-rustic-background-KM7NKB.jpg)' }}>
                    <div className="bg-black bg-opacity-60 min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                            <p className="text-white mt-4 text-lg">Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-lg text-red-500">Something went wrong. Please try again later.</p>;
    }

    return (
        <div className="relative min-h-screen">
            <div 
                className="absolute inset-0 bg-cover bg-center py-[20px] overflow-hidden" 
                style={{ backgroundImage: 'url(https://c8.alamy.com/comp/KM7NKB/baking-background-fresh-ingredients-for-baking-on-rustic-background-KM7NKB.jpg)' }}
            >
                <div className="bg-black bg-opacity-60 min-h-screen">
                    <div className="mx-auto p-8 bg-white rounded-2xl shadow-2xl relative z-10 max-w-[1440px] w-full">
                        {product ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 rounded-xl overflow-hidden shadow-lg h-full w-full">
                                {/* Column 1: Image */}
                                <div className="col-span-1">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-96 object-cover md:h-full rounded-l-xl" 
                                    />
                                </div>

                                {/* Column 2: Product Details */}
                                <div className="col-span-1 p-8">
                                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{product.name}</h1>
                                    <div className="flex items-center mb-6">
                                        <span className="text-xl font-semibold text-gray-800 mr-3">Rating:</span>
                                        <span className="text-yellow-500 text-2xl">{product.rating} ⭐</span>
                                    </div>
                                    <p className="text-lg text-gray-600 mb-6">{product.cuisine}</p>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {product.tags.map((tag, index) => (
                                            <span 
                                                key={index} 
                                                className="bg-blue-100 text-blue-800 text-sm py-1.5 px-3 rounded-full border border-blue-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients:</h2>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 grid grid-cols-2 gap-x-4">
                                        {product.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Column 3: Instructions */}
                                <div className="col-span-1 p-8">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions:</h2>
                                    <p className="text-gray-700 text-lg mb-6">{product.instructions}</p>
                                    <div className="flex justify-between mt-6">
                                        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                                            Add to Favorites
                                        </button>
                                        <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">
                                            Share Recipe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-800 text-center text-2xl">Product not found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
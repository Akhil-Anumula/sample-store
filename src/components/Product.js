import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Product() {
    const proId = useParams();
    const ProductId = proId.id;
    const [proData, setProData] = useState({})

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${ProductId}`)
            .then(res => setProData(res.data))
            .catch(err => console.log(err))
    }, [ProductId]);

    const { thumbnail, brand, description, images, price, rating, title } = proData;

    return (
        <>
            <Navbar />
            <div className='w-full p-4'>
                <div className="flex flex-col lg:flex-row">
                    <div className="pt-20 w-full md:h-[100% - 80px] md:flex flex-col lg:max-w-[40%] ">
                        <div className="md:flex justify-center items-center">
                            <img className='rounded-lg shadow-xl shadow-blue-900 max-h-[280px]' src={thumbnail} alt="" />
                        </div>
                        <div className="grid grid-cols-5 gap-4 p-8">
                            {images?.length && images.map((item, i) => (
                                <div key={`smi${i}`} className="flex justify-center items-center  rounded-md shadow shadow-gray-700">
                                    <img className='rounded-md max-h-[100px]' src={item} alt={``} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pt-12 md:p-4 rounded-lg lg:pt-20 lg:p-16">
                        <h1 className='text-4xl py-2'>{title}</h1>
                        <h3 className='text-xl font-semibold py-3'> <span className='text-blue-700'>Brand : </span> <span className='opacity-80'>{brand}</span></h3>
                        <p className='text-lg font-bold underline py-2 text-emerald-700'>Description : </p>
                        <p className='text-xl font-semibold text-gray-600'>{description}</p>
                        <h2 className='text-2xl font-bold py-4 text-gray-700'>Price : <span className='text-green-500'>{price} $</span></h2>
                        <p className="text-xl font-bold py-2 text-gray-700">Rating : <span className='opacity-80'>{rating}</span> ⭐</p>
                        <button className='py-4 px-8 my-6 rounded-lg bg-gradient-to-r from-black to-gray-800 text-white' >Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Product;
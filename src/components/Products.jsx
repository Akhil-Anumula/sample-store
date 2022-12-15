import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err))
  }, [])
  return (
    <div id='products' className="w-full p-4 lg:max-w-[1240px] mx-auto">
      <h2 className='text-3xl font-bold underline py-8'>Products</h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        {products.map((item, i) => (

          <div key={`product${i}`} onClick={() => navigate(`/product/${item.id}`)} className="flex flex-col bg-black rounded-lg shadow-xl shadow-gray-900 text-white text-center cursor-pointer hover:scale-105 duration-300 ease-in" >
            <div className=''>
              <img className='rounded-lg h-36 md:h-44 w-full' src={item.thumbnail} alt={`${item.title}-img`} />
            </div>
            <h3 className='font-bold py-2 text-lg text-gray-100'>{item.title}</h3>
            <h4 className='font-normal opacity-75 pb-2'>Price : {item.price}<span className='font-bold text-green-700'> $</span></h4>
          </div>

        ))}
      </div>
    </div>

  )
}

export default Products
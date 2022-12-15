import React from 'react'
import About from './About';
import Contact from "./Contact";
import Navbar from './Navbar';
import Products from "./Products";
function Home() {
    return (
        <>
            <Navbar/>
            <div id="home" style={{ backgroundImage: `url("https://www.csscorp.com/wp-content/uploads/2021/01/digital-commerce-services.jpg")` }}
                className='w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center '>
                <div className='text-black text-center'>
                    <h3 className='text-5xl font-bold m-6'>Welcome </h3>
                    <p className="text-3xl font-medium px-4">to the world's largest Online Shopping Platform</p>
                </div>
            </div>
            <About />
            <Products />
            <Contact />
        </>

    )
}

export default Home
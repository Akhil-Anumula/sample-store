import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useState ,useEffect} from 'react';
import { MdClose } from 'react-icons/md';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, []);
    return (
        <div className={shadow ? `fixed w-full h-20 bg-gray-900 p-4 text-white shadow-xl z-[100]` : `fixed w-full h-20 bg-gray-900 p-4 text-white z-[100]`}>
            <div className="flex justify-between items-center w-full h-full px-2">
                <div>
                    <h1 className='text-3xl text-cyan-600'>Digital Store</h1>
                </div>
                <div className='hidden md:flex justify-evenly items-center uppercase text-gray-300'>
                    <Link to='/#home' smooth={true} className='font-medium tracking-wider  md:px-4 lg:px-8 cursor-pointer hover:text-indigo-500 duration-300 ease-in' >Home</Link>
                    <Link to='/#about' smooth={true} className='font-medium  tracking-wider md:px-4 lg:px-8 cursor-pointer hover:text-indigo-500 duration-300 ease-in' >About</Link>
                    <Link to='/#products' smooth={true} className='font-medium tracking-wider  md:px-4 lg:px-8 cursor-pointer hover:text-indigo-500 duration-300 ease-in' >Products</Link>
                    <Link to='/#contact' smooth={true} className='font-medium tracking-wider  md:px-4 lg:px-8 cursor-pointer hover:text-indigo-500 duration-300 ease-in' >Contact</Link>
                </div>
                <div className='md:hidden p-2 text-white font-extrabold' >
                        <HiOutlineMenuAlt3 onClick={handleNav} size={30} />
                </div>
            </div>


            <div onClick={handleNav} className={nav ? `md:hidden fixed top-0 right-0 bg-black duration-500 ease-in w-full h-screen ` : ``}>
                <div className={nav ? `fixed top-0 right-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-gray-900 p-10 ease-in duration-500 ` : `fixed right-[-100%] top-0 p-10 ease-in duration-1000`}>
                    <div onClick={handleNav} className='bg-red-900 absolute top-[5%] right-5 p-3 cursor-pointer rounded-full text-white'><MdClose size={30} /></div>
                    <h1 className='mt-4 text-5xl text-sky-600'>D S</h1>
                    <div className="flex flex-col justify-center items-center w-full h-full uppercase">
                        <Link onClick={handleNav} smooth={true} to='/#home' className='font-medium tracking-widest text-2xl py-8 text-gray-400 cursor-pointer  duration-300 ease-in' >Home</Link>
                        <Link onClick={handleNav} smooth={true} to='/#about' className='font-medium tracking-widest text-2xl py-8 text-gray-400 cursor-pointer  duration-300 ease-in' >About</Link>
                        <Link onClick={handleNav} smooth={true} to='/#products' className='font-medium tracking-widest text-2xl py-8 text-gray-400 cursor-pointer  duration-300 ease-in' >Products</Link>
                        <Link onClick={handleNav} smooth={true} to='/#contact' className='font-medium tracking-widest text-2xl py-8 text-gray-400 cursor-pointer  duration-300 ease-in' >Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
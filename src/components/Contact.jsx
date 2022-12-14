import React from 'react'

function Contact() {
    return (
        <div name="contact" className='w-full h-screen flex flex-col justify-between'>
            <div className="w-full py-40">
                <h1 className='text-3xl font-bold underline p-4 md:py-8'>Contact Us</h1>
                <p className="font-semibold text-lg p-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quo quis amet fugit voluptatem blanditiis, laboriosam reprehenderit nam fugiat itaque nemo similique nobis, odio a magnam. Libero, consectetur facilis. Animi!
                    Ipsa deleniti eum id numquam quaerat ducimus neque maxime dignissimos fugiat quasi. Ratione eos nulla obcaecati aperiam, provident officia architecto in error eaque porro, ut eveniet id? Cum, omnis voluptates.
                </p>
            </div>
            <div className="bg-slate-800 w-full text-white">
                <div className='grid grid-cols-2 gap-8 lg:grid-cols-4 p-8 justify-items-center text-center'>
                    <div>
                        <h3 className='font-bold tracking-wide underline uppercase text-slate-400'>online store</h3>
                        <p className='opacity-70'>Mobiles</p>
                        <p className='opacity-70'>Tablets</p>
                        <p className='opacity-70'>Laptops</p>
                        <p className='opacity-70'>Accessories</p>
                    </div>
                    <div>
                        <h3 className='font-bold tracking-wide underline uppercase text-slate-400'>Helpful links</h3>
                        <p className='opacity-70'>Home</p>
                        <p className='opacity-70'>About</p>
                        <p className='opacity-70'>Products</p>
                        <p className='opacity-70'>Contact</p>
                    </div>
                    <div>
                        <h3 className='font-bold tracking-wide underline uppercase text-slate-400'>Partners</h3>
                        <p className='opacity-70'>Apple</p>
                        <p className='opacity-70'>Asus</p>
                        <p className='opacity-70'>Samsung</p>
                        <p className='opacity-70'>+ Many More</p>
                    </div>
                    <div>
                        <h3 className='font-bold tracking-wide underline uppercase text-slate-400'>Address</h3>
                        <p className='opacity-70'>Building - 101</p>
                        <p className='opacity-70'>Central Avenue</p>
                        <p className='opacity-70'>LA - 902722</p>
                        <p className='opacity-70'>United States</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
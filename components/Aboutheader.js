import React from 'react'
import Image from 'next/image'

function Aboutheader() {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-20">
    <div className="absolute inset-0">
        <Image className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg" alt="" width={1920} height={1920} />
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

    <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-3xl">HOME/About Us</h2>
           

           
        </div>
    </div>
</section>
  )
}

export default Aboutheader
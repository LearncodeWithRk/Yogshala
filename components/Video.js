import React from 'react'
import Image from 'next/image'

function Video() {
  return (
  
            <div className="relative pt-32 overflow-hidden xl:pt-12 bg-green-100">
    
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-bg-green-900 sm:text-4xl lg:text-5xl">We are a certified Yoga School by World Yoga Federation.</h2>
            
        </div>
    
        <div className="relative">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <div className="text-left md:max-w-xl md:mx-auto md:text-center">
                    
                    
    
                   
                </div>
            </div>
        </div>
    
        <div className="relative max-w-5xl px-6 mx-auto mt-12 -mb-8 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">
            <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
                <Image className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-80" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300263/yoga/bruce-mars-gJtDg6WfMlQ-unsplash_ta5fte.jpg" alt="" width={1920} height={1920} />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <button type="button" className="flex flex-col items-center">
                    <span className="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 border-2 rounded-full text-white border-primary hover:bg-green hover:bg-opacity-20">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.91926C7.37507 4.51934 6.5271 4.99945 6.5271 5.77675L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8575C19.061 12.4691 19.061 11.5309 18.4137 11.1425L8.0416 4.91926Z" />
                        </svg>
                    </span>
                    <span className="mt-5 text-base font-normal text-white"> Play trailer </span>
                </button>
            </div>
        </div>
    </div>
    
   

  )
}

export default Video
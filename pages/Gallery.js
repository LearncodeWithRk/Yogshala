import Galleryheader from '@/components/Galleryheader'
import React from 'react'
import Image from 'next/image'

function Gallery() {
  return (
    <>
    <Galleryheader width={1920} height={1920} /> 
    <section className="py-6 dark:bg-green-800 dark:text-green-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<Image src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300273/yoga/hopefilmphoto-QiYZCKJQMck-unsplash_yumfqx.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-green-500 aspect-square"   width={1920} height={1920} />  
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300270/yoga/elena-kloppenburg-erUC4fTtCuo-unsplash_ntpjxj.jpg"  width={1920} height={1920} /> 
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300270/yoga/conscious-design-893qZckG6I4-unsplash_sf6hjg.jpg" width={1920} height={1920} /> 
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300266/yoga/dane-wetton-t1NEMSm1rgI-unsplash_dkjh6w.jpg" width={1920} height={1920} /> 
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300263/yoga/kaylee-garrett-GaprWyIw66o-unsplash_ymmkx4.jpg" width={1920} height={1920} /> 
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300264/yoga/erik-brolin-wmZNEGkcsmw-unsplash_ofzipd.jpg" width={1920} height={1920} /> 
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300246/yoga/hopefilmphoto-QiYZCKJQMck-unsplash_ppqkis.jpg" width={1920} height={1920} /> 
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300246/yoga/conscious-design-IbsgfRJslEc-unsplash_uy0htj.jpg" width={1920} height={1920} /> 
		<Image alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-green-500 aspect-square" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300246/yoga/benjamin-child-rOn57CBgyMo-unsplash_tpdxzg.jpg" width={1920} height={1920} /> 
		<Image src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695300263/yoga/bruce-mars-gJtDg6WfMlQ-unsplash_ta5fte.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-green-500 aspect-square" width={1920} height={1920} /> 
	</div>
</section>
    </> 

  )
}

export default Gallery
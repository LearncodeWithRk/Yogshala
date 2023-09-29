import React from 'react'
import Image from 'next/image'

function Brand() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695983288/yoga/img4_fohtt2.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695983288/yoga/img3_e6peh8.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695983288/yoga/img1_ssxpb2.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695983288/yoga/img6_lzotxd.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695983288/yoga/img5_bufo3g.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695983288/yoga/img2_noclg9.png" alt="" width={1920} height={1920} />
            </div>
        </div>
    </div>
</section>

  )
}

export default Brand
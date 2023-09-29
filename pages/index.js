import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Appointment from '@/components/Appointment'
import Brand from '@/components/Brand'
import Video from '@/components/Video'
import Expertise from '@/components/Expertise'

import Feature from '@/components/Feature'
import Infobrand from '@/components/Infobrand'
import Testimonials from '@/components/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
  <Hero />
  <Brand />
  <Video />
  <Expertise />
<Infobrand />
  <Feature />
  <Testimonials />
   </>
  )
}

import React from 'react'
import Image from 'next/image'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import logorpccc from '../../../public/logorpcc.png'
import objbg1 from '../../../public/obj-bg-1.svg'
import objbg2 from '../../../public/obj-bg-2.svg'
import objbg3 from '../../../public/obj-bg-3.svg'

const Hero = () => {
  return (
      <section className={'container mx-auto mt-12'}>
        <div className={'flex items-center justify-between relative flex md:flex-row flex-col'}>
          <div className={'text-5xl text-center md:text-left md:text-6xl lg:text-7xl md:max-xl:ms-8 text-primary font-bold'}>
            <h1  className={'font-mono '}>Raden Patah<br/>Creative Canvas 2025</h1>
            <div className={'flex gap-4 mt-6'}>

            <Button className={'text-lg px-12 mx-auto md:mx-0'} asChild>
              <Link href={'https://forms.gle/wKB8W9GLnpKmEFMGA'}>Daftar RPCC Sekarang</Link>
            </Button>
            </div>
          </div>
         <Image src={logorpccc} alt={'logo raden patah creative canvas'} className={'basis-5/12 max-md:size-64 max-lg:size-72 object-contain md:order-last order-first'}/>
        <Image
            src={objbg1}
            alt={''}
            className={'xl:-left-72 lg:-left-36 md:-left-36 -left-32  -z-10  absolute'}
        />
        <Image
            src={objbg2}
            alt={''}
            className={'-right-24 xl:-right-72 -top-20  absolute'}
        />
        <Image
            src={objbg3}
            alt={''}
            className={'-right-24 md:-right-36 scale-50 md:scale-75 lg:scale-100 xl:-right-72  -bottom-64  absolute'}
        />
        </div>
      </section>
  )
}
export default Hero

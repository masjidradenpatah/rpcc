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
      <section className={'container mx-auto'}>
        <div className={'flex items-center justify-between relative'}>
          <div className={'text-7xl text-primary font-bold'}>
            <h1  className={'font-mono'}>Raden Patah<br/>Creative Canvas 2025</h1>
            <div className={'flex gap-4 mt-6'}>

            <Button className={'text-lg px-12 '} asChild>
              <Link href={'https://forms.gle/wKB8W9GLnpKmEFMGA'}>Daftar RPCC Sekarang</Link>
            </Button>
            </div>
          </div>
        <Image src={logorpccc} alt={'logo raden patah creative canvas'} className={'basis-5/12 scale-75 '}></Image>
        <Image src={objbg1} alt={''} className={'-left-72  absolute'}></Image>
        <Image src={objbg2} alt={''} className={'-right-72 -top-20  absolute'}></Image>
        <Image src={objbg3} alt={''} className={'-right-72 -bottom-64  absolute'}></Image>
        </div>
      </section>
  )
}
export default Hero

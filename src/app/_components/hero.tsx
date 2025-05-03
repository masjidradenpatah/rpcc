import React from 'react'
import Image from 'next/image'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import logorpccc from '../../../public/logorpcc.png'

const Hero = () => {
  return (
      <section className={'container mx-auto'}>
        <div className={'flex items-center justify-between'}>
          <div className={'text-7xl text-primary font-bold'}>
            <h1  className={'font-mono'}>Raden Patah<br/>Creative Canvas 2025</h1>
            <div className={'flex gap-4 mt-6'}>

            <Button className={'text-lg'} variant={'ghost'} asChild>
              <Link href={'#definition'}>Apa itu Webinar RPCC</Link>
            </Button>
            <Button className={'text-lg'} asChild>
              <Link href={'https://forms.gle/wKB8W9GLnpKmEFMGA'}>Daftar RPCC</Link>
            </Button>
            </div>
          </div>
        <Image src={logorpccc} alt={'logo raden patah creative canvas'}></Image>
        </div>
      </section>
  )
}
export default Hero

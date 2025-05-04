import React from 'react'
import Image from 'next/image'
import logorpccc from '../../../public/logorpcc-horizontal.png'
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
      <nav className={'border fixed left-0 right-0 top-0 bg-background z-50'}>
        <div className={'container mx-auto flex justify-between items-center'}>
          <Image
              className={'h-[64px] w-[200px] object-contain  my-4 '}
              src={logorpccc}
              alt={'logo raden patah creative canvas'}
          />

          <div className={'hidden sm:flex gap-4'}>
            <Button variant={'ghost'} className={'border-none text-lg '}
                    asChild
            >
              <Link href={'#'} >Home</Link>
            </Button>
            {/*<Button variant={'ghost'}  className={'border-none text-lg'} asChild>*/}
            {/*  <Link href={'https://radenpatah.com'}>Masjid Raden Patah</Link>*/}
            {/*</Button>*/}
            <Button className={'text-lg'} asChild>
              <Link href={'https://forms.gle/wKB8W9GLnpKmEFMGA'}>Daftar RPCC</Link>
            </Button>

          </div>



        </div>
      </nav>
  )
}
export default Navbar

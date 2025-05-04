import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Cta = () => {
  return (
      <section className={'container mx-auto bg-primary py-8 md:py-16' +
          ' rounded-2xl' +
          ' flex flex-col gap-4 md:gap-6 p-4'}>
        <h2 className={'text-3xl md:text-4xl lg:text-5xl text-center' +
            ' font-bold' +
            ' font-mono' +
            '  text-secondary'}>
          From Passion to Profession </h2>
        <p className={'text-white text-3xl md:text-4xl lg:text-5xl' +
            ' text-center' +
            ' font-bold'}>Ayo Daftar Raden Patah Creative Canvas Sekarang!!!</p>
        <Button className={'text-2xl bg-white text-primary mx-auto'} asChild>
          <Link href={'https://forms.gle/wKB8W9GLnpKmEFMGA'} className={' px-6 py-4'} >Daftar RPCC</Link>
        </Button>
      </section>
  )
}
export default Cta

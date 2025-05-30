import React from 'react'
import Image from "next/image";
import defobj from "../../../public/definition-obj.png";

const Definition = () => {
  return (
      <section className={'container mx-auto p-4'} >
        <h2 className={'text-4xl md:text-5xl text-center font-bold font-mono' +
            ' text-secondary'}>
          Apa itu Webinar RPCC ?
        </h2>
        <div className={'flex items-center justify-between gap-4 sm:gap-8'}>
          <p className={'relative font-normal text-black text-lg text-center' +
              ' md:text-2xl mt-4 sm:text-left' +
              ' sm:basis-8/12'}>
            <span className={'text-primary font-bold text-nowrap'}>Raden Patah Creative Canvas 2025 </span>
            adalah webinar desain grafis yang diselenggarakan oleh
            <span className={'relative text-white mx-2 px-1 pb-1 bg-tertiary'}>Digital Creative</span>
            Masjid Raden Patah UB.  Kegiatan ini bertujuan memberikan ruang belajar bagi masyarakat umum untuk mengembangkan
            <span className={'relative text-white mx-2 px-1 pb-1 bg-tertiary' +
                ' text-nowrap'}>skill desain</span>
            yang menarik dan profesional.
          </p>

          <div
              className={'hidden sm:block basis-4/12 flex justify-center items-center'}
          >
            <Image
                className={''}
                src={defobj}
                alt={''}
            />

          </div>
        </div>
      </section>
  )
}
export default Definition

import React from 'react'
import Image from "next/image";
import defobj from "../../../public/theme-obj.png";

const Theme = () => {
  return (
      <section className={'container mx-auto p-4'}>
        <h2 className={'text-3xl sm:text-4xl md:text-5xl text-center font-bold font-mono text-white bg-secondary py-2 px-4 sm:w-fit'}>
          From Passion to Profession
        </h2>
        <div className={'relative flex items-center'}>
          <div className="sm:basis-8/12 ">
            <p className={'text-lg sm:text-xl md:text-2xl px-2 sm:px-6 py-2 sm:py-8 border-2 border-primary text-center sm:text-left'}>
              Raden Patah Creative Canvas kali ini memiliki tema webinar yang menarik yaitu bagaimana caranya untuk
              <span className={'relative text-white mx-2 px-1 pb-1 bg-tertiary text-nowrap'}>upgrade portofolio</span> desain agar menjadi lebih menarik dan bisa menjadi seorang desainer grafis professional.
            </p>

          </div>
          <div className={'hidden sm:flex relative basis-4/12 items-center justify-center'}>
            <Image src={defobj} alt={''} className={'absolute'} />
          </div>
        </div>
      </section>
  )
}
export default Theme

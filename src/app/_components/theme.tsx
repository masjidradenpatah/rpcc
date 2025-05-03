import React from 'react'
import Image from "next/image";
import defobj from "../../../public/theme-obj.png";

const Theme = () => {
  return (
      <section className={'container mx-auto'}>
        <h2 className={'text-5xl text-center font-bold font-mono text-white bg-secondary py-2 px-4 w-fit'}>
          From Passion to Profession
        </h2>
        <div className={'relative flex items-center'}>
          <div className="basis-8/12 ">
            <p className={'text-2xl px-6 py-8 border-2 border-primary'}>
              Raden Patah Creative Canvas kali ini memiliki tema webinar yang menarik yaitu bagaimana caranya untuk
              <span className={'relative text-white mx-2 px-1 pb-1 bg-tertiary'}>upgrade portofolio</span> desain agar menjadi lebih menarik dan bisa menjadi seorang desainer grafis professional.
            </p>

          </div>
          <div className={'relative basis-4/12 flex items-center justify-center'}>
            <Image src={defobj} alt={''} className={'absolute'} />
          </div>
        </div>
      </section>
  )
}
export default Theme

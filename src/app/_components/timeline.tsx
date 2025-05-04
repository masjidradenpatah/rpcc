import React from 'react'
import Image from "next/image";
import timeline from "../../../public/timeline.svg";
import clock from "../../../public/clock.svg";
import objbg4 from "../../../public/obj-bg-4.svg";
import objbg5 from "../../../public/obj-bg-5.svg";

const Timeline = () => {
  return (
      <section className={'container mx-auto relative mt-8 mb-36 p-4'}>
        <Image src={objbg4} alt={''} className={'-top-52 left-24' +
            '  absolute'}></Image>
        <Image src={objbg5} alt={''} className={'top-0 -right-72' +
            '  absolute'}></Image>
        <div className={'mx-auto justify-center relative flex items-center mb-24'}>
            <Image
                src={clock}
                alt={'timeline'}
                className={'-me-12 scale-50 sm:scale-75 lg:scale-100'}
            />
          <h2
              className={'text-3xl sm:text-4xl md:text-5xl text-center font-bold font-mono text-primary w-fit z-10'}>
            Timeline
          </h2>
        </div>

        <Image
            src={timeline}
            alt={'timeline'}
            className={'min-w-[400px] w-[956px] left-1/2 -translate-x-1/2 relative'}
        />

     </section>
  )
}
export default Timeline

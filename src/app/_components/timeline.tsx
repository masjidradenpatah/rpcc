import React from 'react'
import Image from "next/image";
import timeline from "../../../public/timeline.svg";
import clock from "../../../public/clock.svg";
import objbg4 from "../../../public/obj-bg-4.svg";
import objbg5 from "../../../public/obj-bg-5.svg";

const Timeline = () => {
  return (
      <section className={'container mx-auto relative mt-8 mb-36'}>
        <Image src={objbg4} alt={''} className={'-top-52 left-24' +
            '  absolute'}></Image>
        <Image src={objbg5} alt={''} className={'top-0 -right-72' +
            '  absolute'}></Image>
        <div className={'mx-auto justify-center relative flex items-center mb-24'}>
            <Image
                src={clock}
                alt={'timeline'}
                className={'-me-12'}
            />
          <h2
              className={'text-5xl text-center font-bold font-mono text-primary w-fit'}>
            Timeline
          </h2>
        </div>

        <Image
            src={timeline}
            alt={'timeline'}
            className={'w-[956px] mx-auto'}
        />

     </section>
  )
}
export default Timeline

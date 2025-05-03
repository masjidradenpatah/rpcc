import React from 'react'
import Image from "next/image";
import timeline from "../../../public/timeline.svg";
import clock from "../../../public/clock.svg";

const Timeline = () => {
  return (
      <section className={'container mx-auto '}>
        <div className={'mx-auto justify-center relative flex items-center'}>
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

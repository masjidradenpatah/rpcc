import React, {ReactNode} from 'react'
import Image, {StaticImageData} from "next/image";
import certificate from "../../../public/award-alt 1.svg";
import camera from "../../../public/camera 1.svg";
import portfolio from "../../../public/briefcase-alt-4 1.svg";
import laptop from "../../../public/laptop-arrow-up-alt 2.svg";
import emoney from "../../../public/money-bill 1.svg";
import book from "../../../public/book 1.svg";
import crown from "../../../public/crown 1.svg";
import {cn} from "@/lib/utils";

const Benefit = () => {
  return (<section className={'container mx-auto'}>
    <div className={'mx-auto relative border w-fit mb-16'}>
      <h2 className={'text-4xl text-center font-bold font-mono text-white bg-secondary py-2 px-4 w-fit'}>
        Kenapa Kamu Harus Ikut ? </h2>
    </div>
    <div className={'relative flex items-center justify-center gap-6'}>
      <BenefitCard className={'h-[275px] w-[250px]'} image={certificate}
                   alt={'icon sertifikat webinar'}>
        <p className={'text-4xl text-center'}>Sertifikat Webinar</p>
      </BenefitCard>
      <BenefitCard className={'h-[275px] w-[366px]'} image={portfolio}
                   alt={'icon portfolio'}>
        <p className={'text-4xl text-center'}>
          Ilmu praktis membangun portofolio </p>
      </BenefitCard>
      <BenefitCard className={'h-[275px] w-[250px]'} image={camera}
                   alt={'icon record zoom'}>
        <p className={'text-4xl text-center'}>Record Zoom</p>
      </BenefitCard>
    </div>
    <div className={'relative flex items-center justify-center gap-6'}>
      <BenefitCard className={'h-[536px] w-[350px]'} image={book}
                   alt={'icon sertifikat webinar'}>
        <p className={'text-4xl text-center'}>Akses Materi</p>
      </BenefitCard>

      <div
          className={'h-[536px] w-[400px] font-bold font-mono flex flex-col gap-4 justify-center items-center'}>
        <div className={' relative'}>
          <Image src={laptop} alt={'icon laptop'}/>
          <Image src={crown} alt={''} className={'absolute -top-10 -right-10 rotate-45'}/>
        </div>
        <p className={'text-4xl text-center'}>
          Akses GRATIS ke Kelas Luarsekolah </p>
        <p className={'text-3xl text-center font-normal text-secondary'}>
          “CorelDRAW Essentials:
          Keterampilan Wajib untuk Desainer Grafis” </p>
      </div>
      <BenefitCard className={'h-[536px] w-[350px]'} image={emoney}
                   alt={'icon e-money'}>
        <p className={'text-4xl text-center'}>Kesempatan Mendapatkan E-Money</p>

      </BenefitCard>
    </div>
  </section>)
}
export default Benefit

const BenefitCard = ({className, children, image, alt}: {
  alt: string,
  image: StaticImageData,
  className: string,
  children: ReactNode
}) => {
  return (<div
          className={cn(' font-bold font-mono flex flex-col gap-8 justify-center items-center', className)}>
        <Image src={image} alt={alt}/>
        {children}
      </div>)
}

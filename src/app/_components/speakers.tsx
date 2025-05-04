import React from 'react'
import Image from "next/image";
import syammas from "../../../public/syammas.png";
import abrar from "../../../public/abrar.png";
import objbgdots from "../../../public/obj-bg-dots.svg";

const Speakers = () => {
  return (<section className={'container mx-auto '}>
    <h2 className={'text-3xl sm:text-4xl md:text-5xl text-center mx-auto' +
        ' font-bold font-mono text-white bg-secondary py-2 px-4 w-[350px] md:w-[400px]' +
        ' max-lg:mb-16'}>
      Speakers </h2>
    <div className={'flex flex-col lg:flex-row items-center relative mt-8' +
        ' lg:mt-0'}>
      <Image src={objbgdots} alt={''} className={'-left-64 -top-32 scale-125' +
          '  absolute'}></Image>
      <Image src={objbgdots} alt={''} className={'-right-64 -bottom-52' +
          '  absolute'}></Image>

      <div className="md:basis-1/2 p-6  h-fit">
        <p className={'text-lg sm:text-xl lg:text-2xl text-center' +
            ' lg:text-right'}>
          Telah aktif di dunia desain sejak 2017, Syammas adalah seorang
          dosen dan mentor yang mengajar di berbagai skala mulai dari
          komunitas, universitas, hingga kementerian. Ia juga mengajar
          konten kreatif dan digital marketing di IISIP. Syammas mendirikan
          kelas desain visual SuperCanvaser dan agensi kreatif Sedesain.id.
          Sejak 2022, ia resmi menjadi Canva Verified Expert, serta memiliki
          sertifikasi di bidang Public Relations dan Adobe Illustrator. </p>
      </div>
      <div className={'flex items-end justify-center md:basis-1/2' +
          ' max-lg:order-first '}>
        <Image src={syammas} alt={'foto syammas p syarbini'} className={'size-[350px] sm:size-[500px] lg:scale-75'}/>
      </div>
    </div>

    <div
        className={'flex flex-col lg:flex-row items-center relative mt-8' + ' lg:mt-0'}>
      <div
          className={'flex items-end justify-center md:basis-1/2'}>
        <Image src={abrar} alt={'foto ahmad abrar'}
               className={'size-[350px] sm:size-[500px] lg:scale-75'}/>
      </div>
      <div className="md:basis-1/2 p-6  h-fit">
        <p className={'text-lg sm:text-xl lg:text-2xl text-center' + ' lg:text-left order-last'}>
          Seorang UI/UX & Product Designer berpengalaman yang saat ini bekerja
          di PT Bank Muamalat Indonesia dan Badan Pengelola Keuangan Haji (BPKH)
          RI. Ia juga aktif sebagai mentor di berbagai platform edukasi seperti
          Rakamin Academy, Hacktiv8, dan Glints. Dengan latar belakang desain
          yang kuat dan pengalaman merancang produk digital berskala nasional
          seperti aplikasi Haji dan M-Passport, Abrar fokus pada peningkatan
          pengalaman pengguna dan strategi desain berbasis riset. </p>
      </div>

    </div>
  </section>)
}
export default Speakers

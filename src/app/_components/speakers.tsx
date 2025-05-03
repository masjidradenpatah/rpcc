import React from 'react'
import Image from "next/image";
import syammas from "../../../public/syammas.png";
import abrar from "../../../public/abrar.png";
import objbgdots from "../../../public/obj-bg-dots.svg";

const Speakers = () => {
  return (<section className={'container mx-auto '}>
    <h2 className={'text-5xl text-center mx-auto font-bold font-mono text-white bg-secondary py-2 px-4 w-[480px]'}>
      Speakers </h2>
    <div className={'flex items-center relative'}>
      <Image src={objbgdots} alt={''} className={'-left-64 -top-32 scale-125' +
          '  absolute'}></Image>
      <Image src={objbgdots} alt={''} className={'-right-64 -bottom-52' +
          '  absolute'}></Image>

      <div className="basis-1/2 p-6  h-fit">
        <p className={'text-2xl text-right'}>
          Telah aktif di dunia desain sejak 2017, Syammas adalah seorang
          dosen dan mentor yang mengajar di berbagai skala mulai dari
          komunitas, universitas, hingga kementerian. Ia juga mengajar
          konten kreatif dan digital marketing di IISIP. Syammas mendirikan
          kelas desain visual SuperCanvaser dan agensi kreatif Sedesain.id.
          Sejak 2022, ia resmi menjadi Canva Verified Expert, serta memiliki
          sertifikasi di bidang Public Relations dan Adobe Illustrator. </p>
      </div>
      <div className={'flex items-center justify-center basis-1/2 '}>
        <Image src={syammas} alt={'foto syammas p syarbini'} className={'scale-75'}/>
      </div>
    </div>

    <div className={'flex items-center'}>
      <div className="basis-1/2 p-6  h-fit">
        <p className={'text-2xl text-left order-last'}>
          Seorang UI/UX & Product Designer berpengalaman yang saat ini bekerja di PT Bank Muamalat Indonesia dan Badan Pengelola Keuangan Haji (BPKH) RI. Ia juga aktif sebagai mentor di berbagai platform edukasi seperti Rakamin Academy, Hacktiv8, dan Glints. Dengan latar belakang desain yang kuat dan pengalaman merancang produk digital berskala nasional seperti aplikasi Haji dan M-Passport, Abrar fokus pada peningkatan pengalaman pengguna dan strategi desain berbasis riset.
        </p>
      </div>
      <div className={'flex items-center order-first justify-center basis-1/2 '}>
        <Image src={abrar} alt={'foto ahmad abrar'} className={'scale-75'}/>
      </div>
    </div>
  </section>)
}
export default Speakers

import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import logorpccc from '../../../public/logorpcc-horizontal.png'
import logounit from '../../../public/logo-unit.svg'
import mrp from '../../../public/mrp-horizontal.svg'
import yt from "../../../public/yt.svg";
import tiktok from "../../../public/tiktok.svg";
import tele from "../../../public/tele.svg";
import ig from "../../../public/ig.svg";
import fb from "../../../public/fb.svg";
import wa from "../../../public/wa.svg";

const Footer = () => {
  return (
      <footer className={'bg-background mt-24 px-8  border-2' +
          ' shadow-[2px_-3px_48px_0px_rgba(0,0,0,0.25)]'}>
      <div
          className={'container max-w-[750px] mx-auto bg-white py-16 rounded-2xl' +
              ' flex  flex-col gap-6'}>
        <Image
            src={mrp}
            alt={'logo mrp'}
            className={'mx-auto'}
        />
        <div className={'flex  flex-col md:flex-row' +
            ' items-center justify-start'}>
          <Image
            src={logorpccc}
            alt={'logo rpcc'}
            className={' w-[200px]'}
          />
          <Image
              src={logounit}
              alt={'logo unit unit yang ada di mrp'}
              className={'md:ms-auto'}
          />

        </div>
        <SocmedFooter />
      </div>
      </footer>
  )
}
export default Footer


const SocmedFooter = () => {
  return (
      <div
          className={"flex w-full flex-col items-center justify-center gap-4 md:flex-row [&_p]:text-base [&_p]:font-medium md:[&_p]:text-[22px]"}>
        {/*  Start Here*/}
        <Link href={"https://wa.me/628993117777"}
              className={"flex items-center gap-3"}>
          <Image className={"size-5 md:size-8"} src={wa}
                 alt={"whatsaapp 0899 311 7777"}/>
          <p className={""}>0899 311 7777</p>
        </Link>
        <Link href={"https://youtube.com/@mrpmedia?si=BNpQh4uYrEqmxN_7"}
              className={"flex items-center gap-3"}>
          <Image className={"size-5 md:size-8"} src={yt}
                 alt={"Youtube mrpmedia"}/>
          <p className={""}>mrpmedia</p>
        </Link>
        <div className={"flex items-center gap-3"}>
          <div className={"flex gap-2"}>
            <Link href={"https://t.me/masjidradenpatah_ub"} target="_blank">
              <Image className={"size-5 md:size-8"} src={tele}
                     alt={"Telegram: masjidradenpatah.ub"}/>
            </Link>
            <Link href={"https://www.facebook.com/masjidradenpatah.ub"}
                  target="_blank">
              <Image className={"size-5 md:size-8"} src={fb}
                     alt={"Facebook: masjidradenpatah.ub"}/>
            </Link>
            <Link href={"https://www.instagram.com/masjidradenpatah.ub"}
                  target="_blank">
              <Image className={"size-5 md:size-8"} src={ig}
                     alt={"Instagram: masjidradenpatah.ub"}/>
            </Link>
            <Link href={"https://www.tiktok.com/@masjidradenpatah.ub"}
                  target="_blank">
              <Image className={"size-5 md:size-8"} src={tiktok}
                     alt={"Tiktok: masjidradenpatah.ub"}/>
            </Link>
          </div>

          <p>masjidradenpatah.ub</p>
        </div>
        {/*  End Here*/}
      </div>)
}
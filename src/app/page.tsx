import Navbar from "@/components/globals/navbar";
import Footer from "@/components/globals/footer";
import Hero from "@/app/_components/hero";
import Definition from "@/app/_components/definition";
import Theme from "@/app/_components/theme";
import Timeline from "@/app/_components/timeline";
import Benefit from "@/app/_components/benefit";
import Cta from "@/app/_components/cta";
import Speakers from "@/app/_components/speakers";

export default function Home() {
  return (
      <div className={'size-full'}>
        <Navbar />
        <main className={'mt-20 relative flex flex-col gap-48'}>
          <Hero />
          <Definition />
          <Theme />
          <Speakers />
          <Timeline />
          <Benefit />
          <Cta />
        </main>
        <Footer />
      </div>
  );
}

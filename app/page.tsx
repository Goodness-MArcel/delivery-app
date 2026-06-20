import Image from "next/image";
import Hero from "../components/delivery/Hero";
import HowItWorks from "../components/delivery/HowItWorks";
import Services from "../components/delivery/Services";
import WhyChooseUs from "@/components/delivery/WhyChooseUs";
import Testimonial from "@/components/delivery/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-col flex-1 w-full">
        <Hero />
        <HowItWorks />
        <Services />
        <WhyChooseUs />
        <Testimonial />
      </main>
    </div>
  );
}

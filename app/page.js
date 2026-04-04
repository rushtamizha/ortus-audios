import Advantage from "@/components/Advantage";

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import HomeProductSwiper from "@/components/HomeProductSwiper";
import CategorySwiper from "@/components/HomeProductSwiper";


export default function Home() {
  return (
    <div className="bg-white">
    <HeroSection/>
    <Features/>
    <Services/>
    <Partners/>
    <Advantage/>
    <CategorySwiper/>
    <Testimonials/>
    </div>
  );
}

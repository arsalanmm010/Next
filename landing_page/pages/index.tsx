import Navbar from '@/components/Navbar'
import HeroSection from "@/components/HeroSection"
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Navbar />
    <HeroSection />
    <Features />
    <Testimonials />
    <Footer />
    </>
  )
}

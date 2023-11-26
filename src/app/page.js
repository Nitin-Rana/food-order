'use client'
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <>
    <SessionProvider>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
    Welcome to our delicious world! Explore a symphony of flavors crafted with passion and precision. Whether you crave comfort classics or daring delights, our menu is designed to tantalize your taste buds.
  </p>
  <p>Indulge in the art of culinary perfection. Our chefs use only the finest ingredients to create mouthwatering dishes that will leave you craving for more.</p>
  <p>From savory starters to heavenly desserts, every bite is a journey of culinary bliss. Place your order now and embark on a culinary adventure with us!</p>

        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="ntnrana2011@gmail.com">
            ntnrana2011@gmail.com
          </a>
        </div>
      </section>
      </SessionProvider>
    </>
  )
}

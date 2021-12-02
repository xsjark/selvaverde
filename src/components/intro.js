import React from "react";
import logo from "../assets/logo.jpg" 

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div class="flex mb-4 content-center">
  <div class="w-1/4 h-48">
    <img className="object-contain h-48 w-48" src={logo} alt="Logo" />
  </div>
  <span class="w-3/4 h-24 self-center">
    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 ">
        Selva Verde
    </h1>
  </span>
  </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 ">
        Jungle, rafting and community tours in the Amazon
      </h4>
    </section>
  )
}

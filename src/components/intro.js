import React from "react";
import logo from "../assets/logo.jpg" 

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-1 mb-0 md:mb-0">
      <div class="flex mb-4 content-center">
  <div className="w-20 h-18">
    <img className="object-contain" src={logo} alt="Logo" />
  </div>
  <span className="w-3/4 self-center ">
    <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 ">
        Selva Verde
    </h1>
  </span>
  </div>
    </section>
  )
}

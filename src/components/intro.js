import React from "react";
import logo from "../assets/logo.jpg" 

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-5 mb-0 md:mb-0">
      <div class="flex mb-4 content-center">
  <div className="w-20 h-18">
    <img className="object-contain" src={logo} alt="Logo" />
  </div>
  <span className="w-3/4 self-center ">
    <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-5">
        Selva Verde
    </h1>
  </span>
  </div>
    </section>
  )
}

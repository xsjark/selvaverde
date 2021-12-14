import React from "react";
import { Link } from 'gatsby'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-8">
      <Link to="/" className="hover:underline">
        Selva Verde
      </Link>
    </h2>
  )
}

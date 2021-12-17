import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import { Link } from "gatsby";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  price,
}) {
  return (
        <section className="bg-coolGray-100 text-coolGray-800 my-10">
        <div className="container mx-auto m:w-full p-4 mx-auto space-y-3 sm:space-y-12">
        <Link to={`/posts/${slug}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-coolGray-50">
          <CoverImage title={title} fluid={coverImage.large} slug={slug} />
            <div className="p-6 space-y-3 lg:col-span-5">
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
            ${price} per person (min. 2)
          </span>
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{title}</h3>
              <p>{excerpt}</p>
            </div>
          </Link>
        </div>
      </section>
      
      
  );
}

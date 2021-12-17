import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import { Link } from "gatsby";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  price,
  minimum
}) {
  return (
    <div>
      <div className="max-w-none p-6 rounded-md shadow-md bg-coolGray-50 text-coolGray-900">
	      <CoverImage 
          slug={slug} 
          title={title} 
          fluid={coverImage.small} 
          className="object-cover object-center w-full rounded-md h-72 bg-coolGray-500" 
        />
	      <div className="mt-6 mb-2 min-h-400">
		      <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
            ${price} per person (min. {minimum})
          </span>
		      <h2 className="text-xl font-semibold tracking-wide">
            <Link to={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h2>
	    </div>
	    <p className="text-coolGray-800">{excerpt}</p>
    </div>
  </div>
  );
}

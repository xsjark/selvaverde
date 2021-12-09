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
  price
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} fluid={coverImage.small} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link to={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div>
      <p className="text-lg leading-relaxed mb-4 inline font-bold"> Price: </p>
      <p className="text-lg leading-relaxed mb-4 inline">${price} per person (min. 2)</p>
      </div>
      <div>
      <p className="text-lg leading-relaxed mb-4 inline font-bold"> Description: </p>
      <p className="text-lg leading-relaxed mb-4 inline">{excerpt}</p>
      </div>  
    </div>
  );
}

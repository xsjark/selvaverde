import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import cn from "classnames";
import { Link } from "gatsby";

export default function CoverImage({ title, fluid, slug }) {
  const image = (
    <GatsbyImage
      image={fluid}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      }),
      "object-contain w-full h-64 sm:h-96 bg-coolGray-500"
    }
    />
  );
  return (
    <div className="sm:mx-0 w-full col-span-7">
      {slug ? (
        <Link to={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

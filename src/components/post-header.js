import React from "react";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, price }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
      <Date dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} fluid={coverImage?.gatsbyImageData} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
        <button class="snipcart-add-item"
          data-item-id={title}
          data-item-price={price}
          data-item-url="/paintings/starry-night"
          data-item-description={date}
          data-item-image={coverImage?.gatsbyImageData}
          data-item-name={title}
          style={{textDecoration: "underline", opacity: 0.75}}>
          Reserve your spot for ${price} 
        </button>
        </div>
      </div>
    </>
  );
}

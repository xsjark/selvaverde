import React from "react";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, price }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
      </div>
      <div className="z-0 w-full h-60 sm:h-96 bg-coolGray-500">
        <CoverImage title={title} fluid={coverImage?.gatsbyImageData} />
      </div>
      
    </>
  );
}

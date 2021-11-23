import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";

export default function PostBody({ content, title, coverImage, date, price, slug }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "DatoCmsImageBlock") {
              return <GatsbyImage image={record.image.gatsbyImageData} />;
            }
            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
      <div className="max-w-2xl mx-auto flex justify-center">
        <div className="mb-6 text-lg">
        <button id={title} class="snipcart-add-item bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          data-item-id={title}
          data-item-price={price}
          data-item-url={"https://selvaverdetours.gatsbyjs.io/posts/" + slug}
          data-item-description={date}
          data-item-image={coverImage?.gatsbyImageData}
          data-item-name={title}
          style={{marginTop: 70}}>
          Reserve your spot for ${price} 
        </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect }  from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";

export default function PostBody({ content, title, coverImage, date, price, slug }) {
  const [stock, setStock] = useState(0);
    const [sales, setSales] = useState(0);

useEffect(() => {
    async function loadData() {
        const response = await fetch('https://app.snipcart.com/api/products/'+title, {
            headers: {
                'Authorization': `Basic ${btoa('ST_NjE4OTlmODgtZmVhNy00NjAwLWE0MzAtZWI4NzRiZjhjYmEwNjM3NzMzNzMyMjcyMDkxMjQx')}`,
                'Accept': 'application/json'
            }})

        const posts = await response.json();
        setStock(JSON.stringify(posts.stock));
        setSales(JSON.stringify(posts.statistics.numberOfSales));
    }

    loadData();
}, []);
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
      <div>
      </div>
      <div className="max-w-2xl mx-auto flex justify-center">
        <div className="mb-6 text-lg">
        <button class="snipcart-add-item bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          data-item-id={title}
          data-item-price={price}
          data-item-url={"https://selvaverdetours.gatsbyjs.io/posts/" + slug + "/#"} 
          data-item-description={date}
          data-item-image={coverImage?.gatsbyImageData}
          data-item-name={title}
          data-item-min-quantity={sales==0 ? 2 : 1}
          style={{marginTop: 70}}
        >
          Reserve your spot for ${price} ({stock-sales} remaining)
        </button>
        </div>
      </div>
    </div>
  );
}

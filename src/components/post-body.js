import React, { useState, useEffect }  from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";
import MyCalendar from "../components/calendar";

export default function PostBody({ content, title, coverImage, date, price, slug, minimum }) {
  const [stock, setStock] = useState(0);
    const [sales, setSales] = useState(0);

useEffect(() => {
    async function loadData() {
        const response = await fetch('https://app.snipcart.com/api/products/'+title, {
            headers: {
                'Authorization': `Basic ${btoa('ST_NjE4OTlmODgtZmVhNy00NjAwLWE0MzAtZWI4NzRiZjhjYmEwNjM3NzMzNzMyMjcyMDkxMjQx')}`,
                'Accept': 'application/json'
            }
          })
        const posts = await response.json();
        setStock(JSON.stringify(posts.stock));
        setSales(JSON.stringify(posts.statistics.numberOfSales));
        }
        loadData();
        }, []);

    return (
    <div className="w-full sm:w-full mx-auto">
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
      <MyCalendar 
        id={title}
        price={price}  
        url={"https://selvaverdetours.gatsbyjs.io/posts/" + slug + "/#"} 
        quantity={2}
        slug={slug}
        minimum={minimum}
      />
    </div>
  );
}

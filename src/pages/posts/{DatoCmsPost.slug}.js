import React from "react";
import { graphql } from "gatsby";
import Container from "../../components/container";
import Header from "../../components/header";
import MoreStories from "../../components/more-stories";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Footer from "../../components/footer";
import CoverImage from "../../components/cover-image";

import { HelmetDatoCms } from "gatsby-source-datocms";
import { ShoppingBagIcon } from '@heroicons/react/solid'


export default function Post({ data: { site, post, morePosts } }) {
  
  return (
    <Container>
      <div class="snipcart-summary"style={{right: 0, marginRight: 10, marginTop: -10, position: "fixed"}}>
      <button class=" snipcart-summary snipcart-checkout pull-right inline-flex items-center justify-center w-50 h-10 mr-2 text-gray-700" >
        <span class="relative inline-block">
        <ShoppingBagIcon className="h-7 w-7 text-gray-500"/>
         <span class="snipcart-total-items absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
        </span>    
      </button>
    </div>
      <HelmetDatoCms seo={post.seo} favicon={site.favicon} />
      <Header> 
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <script src="https://apis.google.com/js/api.js" />

      </Header>
      <div hidden id="snipcart" data-api-key={process.env.SNIPCART_TOKEN} />
      
      <article>
          <div className="p-5 mx-auto sm:p-10 bg-coolGray-100 text-coolGray-800">
	<div className="flex flex-col max-w-4xl mx-auto overflow-wrap rounded">
  <CoverImage title={post.title} fluid={post.coverImage?.gatsbyImageData} className=" w-full h-60 sm:h-96 bg-coolGray-500"/>
		
    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 w-full md:w-5/6 mx-2 rounded bg-white z-20">
			<div className="space-y-2 ">
				<p className="inline-block text-2xl font-semibold sm:text-xl">{post.title}</p>
			</div>
			<div className="text-coolGray-800 w-full">
      <PostBody content={post.content} title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          price={post.price}
          slug={post.slug}
          />
			</div>
		</div>
	
  </div>
</div>
      </article>
      <SectionSeparator />
      {morePosts.nodes.length > 0 && <MoreStories posts={morePosts.nodes} />}
      <Footer />
    </Container>
  );
}

export const query = graphql`
  query PostBySlug($id: String) {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsPost(id: { eq: $id }) {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      content {
        value
        blocks {
          __typename
          id: originalId
          image {
            gatsbyImageData(width: 700)
          }
        }
      }
      date
      price
      coverImage {
        gatsbyImageData(width: 1500)
      }
      author {
        name
        picture {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
            imgixParams: { sat: -100 }
          )
        }
      }
    }
    morePosts: allDatoCmsPost(
      sort: { fields: date, order: DESC }
      limit: 2
      filter: { id: { ne: $id } }
    ) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          small: gatsbyImageData(width: 760)
        }
        author {
          name
          picture {
            gatsbyImageData(
              layout: FIXED
              width: 48
              height: 48
              imgixParams: { sat: -100 }
            )
          }
        }
      }
    }
  }
`;

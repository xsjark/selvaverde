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
import logo from "../../assets/logo.jpg" 
import { Link } from 'gatsby'

import { HelmetDatoCms } from "gatsby-source-datocms";
import { ShoppingBagIcon } from '@heroicons/react/solid'


export default function Post({ data: { site, post, morePosts } }) {
  
  return (
    <Container>
      <header className="p-4 bg-coolGray-100 text-coolGray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <img className="object-contain w-20 h-18" src={logo} alt="Logo" />
          <span className="w-3/4 self-center ">
          <Link to="/" className="hover:underline">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-5">
              Selva Verde
          </h1>
          </Link>
        </span>
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            {/* <li className="flex">
              <a href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Tours</a>
            </li>
            <li className="flex">
              <a href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Testimonials</a>
            </li>
            <li className="flex">
              <a href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600">Contact</a>
            </li> */}
            <li className="flex snipcart-summary">
              <a href="#" className="flex snipcart-checkout items-center px-4 -mb-1 border-b-2 border-transparent">
              <ShoppingBagIcon className="h-7 w-7 text-gray-500"/>
              </a>
            </li>
          </ul>
          <button className="flex snipcart-summary justify-end p-4 md:hidden">
          <a href="#" className="flex snipcart-checkout items-center px-4 -mb-1 border-b-2 border-transparent">
              <ShoppingBagIcon className="h-7 w-7 text-gray-500"/>
              </a>
          </button>
        </div>
      </header>
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
  <CoverImage title={post.title} fluid={post.coverImage?.gatsbyImageData} className=" w-full h-60 sm:h-96 bg-coolGray-500 "/>
		
    <div className="p-6 pb-12 m-4 mx-auto -mt-36 space-y-6 w-full md:w-5/6 mx-2 rounded bg-white z-10">
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
          minimum={post.minimum}
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
      minimum
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
        minimum
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

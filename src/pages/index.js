import React from "react";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Footer from "../components/footer";
import Recommended from "../components/recommended";
import Testimonials from "../components/testimonials";
import MoreStories from "../components/more-stories";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { ShoppingBagIcon } from '@heroicons/react/solid'
import logo from "../assets/logo.jpg" 
import { Link } from "gatsby";

export default function Index({ data: { allPosts, site, blog } }) {
  const heroPost = allPosts.nodes[0];
  const morePosts = allPosts.nodes.slice(1);

  return (
    <Container>

      <header className="p-4 bg-coolGray-100 text-coolGray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <img className="object-contain w-20 h-18" src={logo} alt="Logo" />
          <span className="w-3/4 self-center ">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-5">
              Selva Verde
          </h1>
        </span>
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            {/* <li className="flex">
            <Link to={`/#MoreStories`} className="hover:underline flex items-center px-4 -mb-1 border-b-2 border-transparent">
              Tours
            </Link>
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
          <button className="flex justify-end p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          price={heroPost.price}
        />
      )}
      {morePosts.length > 0 && <MoreStories id="MoreStories" posts={morePosts} />}
      <Testimonials />
      <Recommended />
      <Footer />
    </Container>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        price
        slug
        excerpt
        date
        minimum
        coverImage {
          large: gatsbyImageData(width: 1500)
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

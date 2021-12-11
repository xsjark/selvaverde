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

export default function Index({ data: { allPosts, site, blog } }) {
  const heroPost = allPosts.nodes[0];
  const morePosts = allPosts.nodes.slice(1);

  return (
    <Container>
      <div class="snipcart-summary"style={{float: "right", marginTop: 20}}>
      <button class=" snipcart-summary snipcart-checkout pull-right inline-flex items-center justify-center w-50 h-10 mr-2 text-gray-700" >
        <span class="relative inline-block">
        <ShoppingBagIcon className="h-7 w-7 text-gray-500"/>
         <span class="snipcart-total-items absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
        </span>    
      </button>
    </div>
    
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <Intro />
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
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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

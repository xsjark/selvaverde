import React from "react";
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="container p-5 mx-auto text-center">
      <h2 className="text-4xl font-semibold leading-none text-center">
        Our tours
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-8 gap-y-10 md:gap-y-4 mb-10">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            price={post.price}
            minimum={post.minimum}
          />
        ))}
      </div>
    </section>
  )
}

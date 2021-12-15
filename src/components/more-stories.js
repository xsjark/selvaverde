import React from "react";
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="container p-4 mx-auto text-center">
      <h2 className="text-4xl font-bold ">
        Our tours
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 gap-y-10 md:gap-y-16 mb-16">
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

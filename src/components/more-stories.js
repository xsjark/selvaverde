import React from "react";
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="py-10">
      <h3 className="my-10 block text-2xl font-medium tracking-widest uppercase text-violet-600 text-center">
        Our tours
      </h3>
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
          />
        ))}
      </div>
    </section>
  )
}

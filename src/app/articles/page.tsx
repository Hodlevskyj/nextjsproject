"use client"

import React, { useState } from 'react';
import LayoutArticles from './layout';


interface Post {
  id: number;
  title: string;
  body: string;
}

const Articles = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);


  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchPosts();

  return (
    <LayoutArticles posts={posts} />
  );
};

export default Articles;



// https://codesandbox.io/p/devbox/nextjs-fetch-jsonplaceholder-posts-dynamic-users-hr34q?file=%2Fpages%2Fpost%2F%5Bid%5D.js%3A7%2C46
// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())
 
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }
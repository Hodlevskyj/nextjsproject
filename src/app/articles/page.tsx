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



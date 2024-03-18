"use client"
import React, { useEffect, useState } from 'react';
import LayoutArticles from './layout';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Articles: React.FC = () => {
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
    <LayoutArticles posts={posts}>

    </LayoutArticles>
  );
};

export default Articles;

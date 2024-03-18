"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './articles.module.css';
import Alert from '@mui/material/Alert';


interface Post {
  id: number;
  title: string;
  body: string;
}

interface LayoutArticlesProps {
  posts: Post[];
  children:any;
}

const LayoutArticles = ({ posts,children }: LayoutArticlesProps) => {
  const pathname = usePathname();
  return (
    <div className="container mx-auto py-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li className={pathname === '/articles' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles" className={styles.header}>Articles</Link>
          </li>
          <li className={pathname === '/articles/favorite' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles/favorite">Articles Favorite</Link>
          </li>
          <li className={pathname === '/articles/create' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles/create">Articles Create</Link>
          </li>
        </ul>
      </nav>


      {posts && posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : children? children:(
        <Alert variant="filled" severity="info">
          No post available.
        </Alert>
      )}

    </div>
  );
};

export default LayoutArticles;



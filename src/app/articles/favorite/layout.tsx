"use client"
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';


interface LayoutFavoriteProps {
  id: number;
  title: string;
  body: string;
}

interface Favorite {
  favoriteArticle: LayoutFavoriteProps[];
  children: any;
}

const LayoutFavorite = ({ favoriteArticle, id, children }: Favorite) => {
  const [article, setArticle] = useState({});


  const fetchArticle = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  fetchArticle();


  return (
    <>
      {favoriteArticle && favoriteArticle.length > 0 ? (
        <ul>
          {favoriteArticle.map(article => (
            <li key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      ) : children ? children : (
        <Alert variant="filled" severity="info">
          No post available.
        </Alert>
      )}
    </>
  );
};

export default LayoutFavorite;

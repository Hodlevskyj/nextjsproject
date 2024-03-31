"use client"
import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

interface LayoutFavoriteProps {
  id: number;
  title: string;
  body: string;
}

interface Favorite {
  favoriteArticle?: LayoutFavoriteProps | null;
  children: React.ReactNode;
}

const LayoutFavorite = ({ favoriteArticle, children }: Favorite) => {
  const [article, setArticle] = useState<LayoutFavoriteProps | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${favoriteArticle?.id}`);
        const data: LayoutFavoriteProps = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (favoriteArticle?.id) {
      fetchArticle();
    }
  }, [favoriteArticle]);

  return (
    <>
      {favoriteArticle?.id && article ? (
        <div>
          <h2>{favoriteArticle.title}</h2>
          <p>{favoriteArticle.body}</p>
        </div>
      ) : (
        children ? children : (
          <Alert variant="filled" severity="info">
            No post available.
          </Alert>
        )
      )}
    </>
  );
};

export default LayoutFavorite;





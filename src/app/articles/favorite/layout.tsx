"use client"
import React, { useEffect, useState } from 'react';

interface LayoutFavoriteProps {
  id: number;
}

const LayoutFavorite: React.FC<LayoutFavoriteProps> = ({ id }) => {
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setArticle(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading article {id}...</p>
      ) : (
        <div>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default LayoutFavorite;

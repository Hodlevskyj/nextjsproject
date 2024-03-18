import React from 'react';

interface ArticleProps {
  id: number;
  title: string;
  body: string;
}

const FavoriteArticle: React.FC<ArticleProps> = ({ id, title, body }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default FavoriteArticle;

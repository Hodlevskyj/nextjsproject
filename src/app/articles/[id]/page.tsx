"use client"
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LayoutArticles from '../layout';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const Article: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postData = await postResponse.json();
        setPost(postData);

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);

      } catch (error) {
        console.error('Error fetching post and comments:', error);
      }
    };

    if (id) {
      fetchPostAndComments();
    }
  }, [id]);

  return (
    <LayoutArticles post={post}>
      <>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        <h2>Comments</h2>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </>
    </LayoutArticles>
  );
};

export default Article;


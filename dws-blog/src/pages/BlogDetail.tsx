import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/BlogDetail.scss";
import { Post } from "../types/Post"; // Import the Post type

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Specify the type for useParams
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://tech-test-backend.dwsbrazil.io/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data: Post = await response.json(); // Specify the type as Post
        setPost(data);
      } catch (error: Error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
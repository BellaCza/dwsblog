import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Masthead from "../components/Masthead";
import LatestArticles from "../components/LatestArticles";
import useFormattedDate from '../hooks/useFormattedDate';
import "../styles/pages/BlogDetail.scss";
import { Post } from "../types/Post"; 

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const formattedDate = useFormattedDate(post?.createdAt || '');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://tech-test-backend.dwsbrazil.io/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data: Post = await response.json(); 
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
    <>
      <Masthead />
      <div className="blog-detail">
        <Link to={`/`} className="back-btn">Back</Link>
        <div className="post-content">
          <h1>{post.title}</h1>
          <div className="post-info">
            <img className="author-avatar" src={post.author.profilePicture} alt={post.author.name} />
            <div>
              <p>Written by: <b>{post.author.name}</b></p>
              <p className="date">{formattedDate}</p>
            </div>
          </div>
          <img className="post-image" src={post.thumbnail_url} alt={post.title} />
          <p>{post.content}</p>
          <div className="latest-articles">
            <LatestArticles />
          </div>
        </div>
      </div>
    </ >
  );
};

export default BlogDetail;
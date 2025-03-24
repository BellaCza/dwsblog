import React from "react";
import { useParams } from "react-router-dom";
import Masthead from "../components/Masthead";
import LatestArticles from "../components/LatestArticles";
import useFormattedDate from '../hooks/useFormattedDate';
import usePostDetails from "../hooks/usePostDetails";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "../styles/pages/BlogDetail.scss";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const { post, loading, error } = usePostDetails(id);
  const formattedDate = useFormattedDate(post?.createdAt || '');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Masthead />
      <div className="blog-detail">
        <Button className="button-secondary" text="Back" onClick={() => window.location.href = '/' } />
        <div className="post">
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
      <Footer /> 
    </ >
  );
};

export default BlogDetail;
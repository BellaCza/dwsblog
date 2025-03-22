import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";
import { Post } from "../types/Post"; 

interface CardProps {
  post: Post; 
}

/**
 * A single blog post preview component.
 * 
 * @param {{ post: Post }} props Component props
 * @prop {Post} post The post to display
 * 
 * @returns {React.ReactElement} The rendered component
 */
const Card: React.FC<CardProps> = ({ post }) => {
  const date = new Date(post.createdAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", 
    day: "numeric", 
    year: "numeric", 
  });

  return (
    <Link to={`/post/${post.id}`} className="card">
      <img src={post.thumbnail_url} alt={post.title} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <p className="card-date caption">{formattedDate}</p> {/* Use formatted date */}
          <p className="card-author caption">{post.author.name}</p>
        </div>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-summary">{post.content}</p>
      </div>
    </Link>
  );
};

export default Card;
import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../types/Post"; 
import useFormattedDate from '../hooks/useFormattedDate';
import "../styles/components/Card.scss";

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
  const formattedDate = useFormattedDate(post?.createdAt || '');

  return (
    <Link to={`/post/${post.id}`} className="card">
      <img src={post.thumbnail_url} alt={post.title} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <p className="card-date caption">{formattedDate}</p> 
          <p className="card-author caption">{post.author.name.split(' ').pop()}</p>
        </div>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-summary">{post.content}</p>
        {post.categories.map(category => (
          <p key={category.name} className="card-categories caption">{category.name}</p>
        ))}
      </div>
    </Link>
  );
};

export default Card;
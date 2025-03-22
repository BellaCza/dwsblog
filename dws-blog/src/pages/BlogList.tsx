import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "../styles/BlogList.scss";
import { Post } from "../types/Post"; // Import the Post type

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Specify the type as Post[]
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://tech-test-backend.dwsbrazil.io/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: Post[] = await response.json(); // Specify the type as Post[]
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
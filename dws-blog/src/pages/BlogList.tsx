import React from "react";
import Card from "../components/Card";
import Masthead from "../components/Masthead";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import "../styles/pages/BlogList.scss";
import useFetchPosts from "../hooks/useFetchPosts";

const BlogList: React.FC = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Masthead />
      <div className="nav-top">
        <Sort />
      </div>
      <div className="blog-content">
        <div className="nav-left">
          <Filter />
        </div>
        <div className="blog-list">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
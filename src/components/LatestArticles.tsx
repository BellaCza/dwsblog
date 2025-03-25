import React from "react";
import Card from "./Card";
import useFetchPosts from "../hooks/useFetchPosts";
import "../styles/components/LatestArticles.scss";

/**
 * A component that displays the latest articles.
 *
 * This component fetches the latest three articles available, and displays them
 * as cards. If the articles are still loading, it displays a "Loading..." message.
 * If there is an error during the fetch, it displays an error message.
 *
 * @returns {React.ReactElement} The latest articles component.
 */
const LatestArticles: React.FC = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2 className="latest-articles-title">Latest Articles</h2>
      <div className="latest-articles-line">
        {posts.slice(0, 3).map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default LatestArticles;

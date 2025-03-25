import React, { useState } from "react";
import Card from "../components/Card";
import Masthead from "../components/Masthead";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Footer from "../components/Footer";
import useFetchPosts from "../hooks/useFetchPosts";
import "../styles/pages/BlogList.scss";

/**
 * BlogList component.
 *
 * This component renders the blog list page.
 *
 * It fetches the posts in the specified order (newest or oldest) and renders
 * the list of posts.
 *
 * It also renders a filter and a sort component, which allow the user to
 * filter the posts by category, author or search query and sort them by date.
 *
 * If the data is still loading, it renders a "Loading..." message.
 *
 * If there was an error fetching the data, it renders an "Error: ..." message.
 *
 * @returns The rendered component.
 */
const BlogList: React.FC = () => {
  const [order, setOrder] = useState<"newest" | "oldest">("newest");
  const { posts, loading, error } = useFetchPosts(order);

  const handleOrderChange = (newOrder: "newest" | "oldest") => {
    setOrder(newOrder);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // It would be very nice to have a pagination or LazyLoading in this blog list
  return (
    <>
      <Masthead />
      <div className="nav-top">
        <h2 className="title">DWS Blog</h2>
        <Filter />
        <Sort onOrderChange={handleOrderChange} />
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
      <Footer />
    </>
  );
};

export default BlogList;

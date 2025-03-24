import React, { useState } from "react";
import Card from "../components/Card";
import Masthead from "../components/Masthead";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Footer from "../components/Footer";
import useFetchPosts from "../hooks/useFetchPosts";  
import "../styles/pages/BlogList.scss";

const BlogList: React.FC = () => {
  const [order, setOrder] = useState<'newest' | 'oldest'>('newest');
  const { posts, loading, error } = useFetchPosts(order);

  const handleOrderChange = (newOrder: 'newest' | 'oldest') => {
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
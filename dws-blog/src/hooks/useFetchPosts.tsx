import { useState, useEffect } from 'react';
import { Post } from '../types/Post';

/**
 * A hook that fetches all blog posts from the backend API.
 *
 * Returns an object with the following properties:
 * - posts: An array of Post objects, representing the blog posts.
 * - loading: A boolean indicating whether the data is still loading.
 * - error: A string or null, indicating whether there was an error during fetching.
 *
 * @returns {Object} An object with the posts, loading and error properties.
 */
const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://tech-test-backend.dwsbrazil.io/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error: Error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchPosts;
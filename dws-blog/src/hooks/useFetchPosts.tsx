import { useState, useEffect } from 'react';
import { Post } from '../types/Post';

/**
 * A hook that fetches all blog posts from the backend API.
 *
 * Returns an object with the following properties:
 * - posts: The blog posts.
 * - loading: Whether the data is still loading.
 * - error: Whether there was an error during fetching.
 *
 * @returns The fetched blog posts.
 */
const useFetchPosts = (order: 'newest' | 'oldest') => {
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

        // Sort the posts based on the order parameter
        const sortedPosts = order === 'newest'
        ? data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        : data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

        setPosts(sortedPosts);
      } catch (error: Error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [order]);

  return { posts, loading, error };
};

export default useFetchPosts;
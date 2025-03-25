import { useState, useEffect } from "react";
import { Post } from "../types/Post";

/**
 * A hook that fetches the post details from the API.
 *
 * @param {number} postId The ID of the post to fetch.
 * @returns {Object} An object with the following properties:
 *   - post: The post details, or null if the post is still loading or there was an error.
 *   - loading: A boolean indicating whether the post is still loading.
 *   - error: A string or null, indicating whether there was an error during the fetch.
 */
const usePostDetails = (postId: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://tech-test-backend.dwsbrazil.io/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data: Post = await response.json();
        setPost(data);
      } catch (error: Error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, loading, error };
};

export default usePostDetails;

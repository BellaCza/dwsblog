import { useState, useEffect } from "react";
import { Author } from "../types/Author";

/**
 * A hook that fetches all authors from the backend API.
 *
 * Returns an object with the following properties:
 * - authors: An array of Author objects, representing the authors.
 * - loading: A boolean indicating whether the data is still loading.
 * - error: An error object or null, indicating whether there was an error during fetching.
 *
 * @returns {Object} An object with the authors, loading, and error properties.
 */
const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch(
          "https://tech-test-backend.dwsbrazil.io/authors/"
        );
        const data: Author[] = await response.json();
        setAuthors(data);
      } catch (error: Error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthors();
  }, []);

  return { authors, loading, error };
};

export default useAuthors;

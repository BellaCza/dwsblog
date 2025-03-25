import { useState, useEffect } from "react";
import { Category } from "../types/Category";

/**
 * A hook that fetches all categories from the backend API.
 *
 * Returns an object with the following properties:
 * - categories: An array of Category objects, representing the categories.
 * - loading: A boolean indicating whether the data is still loading.
 * - error: An error object or null, indicating whether there was an error during fetching.
 *
 * @returns {Object} An object with the categories, loading and error properties.
 */
const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://tech-test-backend.dwsbrazil.io/categories/"
        );
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error: Error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;

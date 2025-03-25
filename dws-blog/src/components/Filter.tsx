import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import useAuthors from "../hooks/useAuthors";
import useCategories from "../hooks/useCategories";
import "../styles/components/Filter.scss";

/**
 * Filter component.
 *
 * This component fetches and renders authors and categories to provide filtering options
 * for blog posts. It displays a desktop and mobile version of the filter. The desktop
 * version shows checkboxes for categories and authors, while the mobile version uses
 * dropdowns for selection. A button is provided to apply the filters, redirecting the
 * user to the homepage.
 *
 * @returns A JSX element containing filter options for categories and authors.
 */
const Filter: React.FC = () => {
  const {
    authors,
    loading: authorsLoading,
    error: authorsError,
  } = useAuthors();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  if (authorsLoading || categoriesLoading) {
    return <div>Loading...</div>;
  }

  if (authorsError || categoriesError) {
    return <div>Error: {authorsError.message || categoriesError.message}</div>;
  }

  return (
    <>
      {/* Desktop filter */}
      <div className="filter filter-desktop">
        <h3 className="title">
          <svg
            className="icon"
            width="24px"
            height="24px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64,144H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32Z" />
            <path d="M448,368H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" />
            <path d="M448,240H221.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32h66.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z" />
          </svg>
          Filters
        </h3>
        <fieldset>
          <h4>Category</h4>
          <ul className="filter-list">
            {categories.map((category) => (
              <li key={category.id}>
                <input
                  type="checkbox"
                  id={category.id.toString()}
                  value={category.name}
                />
                <label htmlFor={category.id.toString()}>{category.name}</label>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <h4>Author</h4>
          <ul className="filter-list">
            {authors.map((author) => (
              <li key={author.id.toString()}>
                <input
                  type="checkbox"
                  id={author.id.toString()}
                  value={author.name}
                />
                <label htmlFor={author.id.toString()}>
                  {author.name.split(" ").pop()}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <Button
          text="Apply filters"
          onClick={() => (window.location.href = "/")}
          className="button-primary"
        />
      </div>

      {/* Mobile filter */}
      <div className="filter filter-mobile">
        <Dropdown
          text="Category"
          options={categories.map((category) => category.name)}
        />
        <Dropdown
          text="Author"
          options={authors
            .map((author) => author.name.split(" ").pop())
            .filter((option) => option !== undefined)}
        />
      </div>
    </>
  );
};

export default Filter;

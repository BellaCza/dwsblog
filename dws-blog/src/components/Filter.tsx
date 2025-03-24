import React from "react";
import Button from "./Button";
import useAuthors from "../hooks/useAuthors";
import useCategories from "../hooks/useCategories";
import "../styles/components/Filter.scss";

const Filter: React.FC = () => {
    const { authors, loading: authorsLoading, error: authorsError } = useAuthors();
    const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();

    if (authorsLoading || categoriesLoading) {
        return <div>Loading...</div>;
    }
    
    if (authorsError || categoriesError) {
        return <div>Error: {authorsError.message || categoriesError.message}</div>;
    }

    return (
        <>
            <div className="filter filter-desktop">
                <h3>
                    <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64,144H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32Z"/>
                        <path d="M448,368H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z"/>
                        <path d="M448,240H221.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32h66.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z"/>
                    </svg>
                    Filters
                </h3>
                <nav>
                    <h4>Category</h4>
                    <ul className="filter-list">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <label htmlFor={category.id.toString()}>
                                    <input type="checkbox" value={category.id.toString()} />
                                    {category.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav>
                    <h4>Author</h4>
                    <ul className="filter-list">
                        {authors.map((author) => (
                            <li key={author.id}>
                                <label htmlFor={author.id.toString()}>
                                    <input type="checkbox" value={author.id.toString()} />
                                    {author.name.split(' ').pop()}
                                </label>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button text="Apply filters" onClick={() => window.location.href = '/'} className="button-primary" />
            </div>
            <div className="filter filter-mobile">
                <h3>Filters mob</h3>
            </div>
        </>
    );
}

export default Filter;
import React, { useState } from "react";
import "../styles/components/Sort.scss";

interface SortProps {
  onOrderChange: (newOrder: "newest" | "oldest") => void;
}

/**
 * Sort component.
 *
 * This component provides sorting functionality for a list of items, allowing the user to
 * choose between sorting by "newest" or "oldest" order. It handles user interactions by
 * toggling a dropdown menu for mobile view and setting the active sort option. The component
 * also updates the sort icon's appearance based on user interaction.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onOrderChange - Callback function to handle order changes.
 * @returns {JSX.Element} A JSX element representing the sort options.
 */
const Sort: React.FC<SortProps> = ({ onOrderChange }) => {
  const [isClosed, setIsClosed] = React.useState(true);
  const sortByList = document.querySelector(".sort-by");
  const sortByOptions = sortByList?.querySelectorAll("li");
  const sortIcon = document.querySelector(".sort-icon");
  const handleOrderChange = (newOrder: "newest" | "oldest") => {
    onOrderChange(newOrder);
  };

  const [width] = useState(window.innerWidth);

  const handleSortClick = () => {
    if (width <= 1024) {
      setIsClosed(!isClosed);
    }
  };

  if (sortByOptions) {
    sortByOptions.forEach((option) => {
      option.addEventListener("click", () => {
        sortByOptions.forEach((opt) => opt.classList.remove("active"));
        option.classList.add("active");
        const value = option.getAttribute("data-value");
        handleOrderChange(value as "newest" | "oldest");
      });

      option.addEventListener("mouseover", () => {
        if (option.classList.contains("active")) {
          sortIcon?.classList.add("hover");
        }
      });

      option.addEventListener("mouseout", () => {
        sortIcon?.classList.remove("hover");
      });
    });
  }

  return (
    <div className="sort" onClick={handleSortClick}>
      <p>Sort by:</p>
      <ul className={`sort-by ${isClosed ? "closed" : ""}`}>
        <li className="active" data-value="newest">
          Newest first
        </li>
        <li data-value="oldest">Oldest first</li>
      </ul>
      <svg
        className="sort-icon"
        width="18px"
        height="18px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="464 208 352 96 240 208"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "80px",
          }}
        />
        <line
          x1="352"
          y1="113.13"
          x2="352"
          y2="416"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "68px",
          }}
        />
        <polyline
          points="48 304 160 416 272 304"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "80px",
          }}
        />
        <line
          x1="160"
          y1="398"
          x2="160"
          y2="96"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "68px",
          }}
        />
      </svg>
    </div>
  );
};

export default Sort;

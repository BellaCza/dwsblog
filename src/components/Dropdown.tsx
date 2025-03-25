import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Dropdown.scss";

interface DropdownProps {
  text: string;
  options: string[];
}

/**
 * Dropdown component that is accessible by keyboard and mouse.
 * @param {string} text The text to display in the dropdown button.
 * @param {string[]} options The options to display in the dropdown list.
 * @example
 *  <Dropdown text="Sort by" options={["name", "price"]} />
 * @returns {ReactElement} The rendered dropdown component.
 */
const Dropdown: React.FC<DropdownProps> = ({ text, options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node | null)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [dropdownRef, setDropdownOpen]);

  return (
    <>
      <div ref={dropdownRef} className="dropdown">
        <button className="dropdown-button" onClick={handleDropdownClick}>
          {text}
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className={`icon ${dropdownOpen ? "icon-up" : "icon-down"}`}
          >
            <polyline
              points="112 184 256 328 400 184"
              style={{
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            />
          </svg>
        </button>
        <ul className={dropdownOpen ? "dropdown-list" : "dropdown-list hidden"}>
          {options.map((option) => (
            <li key={option}>
              <Link to={`/${option}`}>{option}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;

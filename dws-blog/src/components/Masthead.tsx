import React from "react";
import { Link } from "react-router-dom";
import dwslogo from "../assets/images/dws-logo.png";
import "../styles/components/Masthead.scss";

const Masthead: React.FC = () => {
    return (
        <header className="masthead">
            <div className="masthead-bg"></div>
            <Link to="/">
                <h1>
                    <img src={dwslogo} alt="DWS Logo" className="masthead-logo" />
                </h1>                
            </Link>
            
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    aria-label="Search posts"
                />
                <button className="search-button" aria-label="Search">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Masthead;
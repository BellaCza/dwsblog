import React from "react";
import "../styles/components/Sort.scss";

interface SortProps {
    onOrderChange: (newOrder: 'newest' | 'oldest') => void;
}

const Sort: React.FC<SortProps> = ({ onOrderChange }) => {
    const sortByList = document.querySelector('.sort-by');
    const sortByOptions = sortByList?.querySelectorAll('li');
    const sortIcon = document.querySelector('.sort-icon');
    const handleOrderChange = (newOrder: 'newest' | 'oldest') => {
        onOrderChange(newOrder);
    };

    if (sortByOptions) {
        sortByOptions.forEach((option) => {
            option.addEventListener('click', () => {
                sortByOptions.forEach((opt) => opt.classList.remove('active'));
                option.classList.add('active');
                const value = option.getAttribute('data-value');
                handleOrderChange(value as 'newest' | 'oldest');
            });

            option.addEventListener('mouseover', () => {
                if (option.classList.contains('active')) {
                  sortIcon?.classList.add('hover');
                }
            });
    
            option.addEventListener('mouseout', () => {
                sortIcon?.classList.remove('hover');
            });
        });
    }

    return (
        <div className="sort">
            <p>Sort by:</p>
            <ul className="sort-by">
                <li className="active" data-value="newest">Newest first     
                </li>
                <li data-value="oldest">Oldest first</li>
            </ul>                           
            <svg className="sort-icon" width="18px" height="18px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <polyline points="464 208 352 96 240 208" style={{ 
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "80px",
                }} />
                <line x1="352" y1="113.13" x2="352" y2="416" style={{ 
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "68px",
                }} />
                <polyline points="48 304 160 416 272 304" style={{ 
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "80px",
                }} />
                <line x1="160" y1="398" x2="160" y2="96" style={{ 
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "68px",
                }} />
            </svg>
        </div>
    );
}

export default Sort;
import React from "react";
import "../styles/components/Button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

/**
 * A button with a chevron icon.
 *
 * @prop {string} text - The text displayed on the button.
 * @prop {() => void} onClick - The function to call when the button is clicked.
 * @prop {string} [className] - The CSS class to apply to the button.
 */
const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} type="button">
      <svg
        className="icon"
        width="24px"
        height="24px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "48px",
        }}
      >
        <polyline points="244 400 100 256 244 112" />
        <line x1="120" y1="256" x2="412" y2="256" />
      </svg>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";

/**
 * Footer component. This component is meant to be used at the bottom of the page.
 * It renders a simple footer with a copyright notice and a link to the author's
 * blog.
 *
 * @returns A JSX element representing the footer.
 */
const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2025 DWS Blog. All rights reserved.</p>
      <p>
        Made by{" "}
        <Link to="https://isabellaczamanski.lovestoblog.com">
          Isabella Czamanski
        </Link>
        .
      </p>
      {/* Added a simple footer just to let my name on it :) */}
    </footer>
  );
};

export default Footer;

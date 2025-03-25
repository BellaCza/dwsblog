import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

/**
 * The main app component, which renders the entire application.
 *
 * This component is the root of the app, and is responsible for
 * rendering the routes.
 *
 * @returns {React.ReactElement} The rendered component
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

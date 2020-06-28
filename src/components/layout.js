import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

// import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      {/* <Header /> */}

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-gray-200 text-gray-500">
        <nav className="flex justify-center max-w-4xl p-4 mx-auto text-sm md:p-8">
        <Link
            className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
            to="/about"
          >
            About
          </Link>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

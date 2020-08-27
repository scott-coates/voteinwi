import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

// import Header from "./header";

function Layout({ children }) {
  return (
    <div>
      <div id="fb-root"></div>
      <script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=1299446753578377&autoLogAppEvents=1"
      ></script>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        {/* <Header /> */}

        <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
          {children}
        </main>
        <div className="flex justify-center mb-12">
          <section className="social">
            <div
              className="fb-like"
              data-href="https://www.voteinwi.org/"
              data-width=""
              data-layout="box_count"
              data-action="like"
              data-size="large"
              data-share="true"
            ></div>
          </section>
        </div>
        <footer className="bg-gray-200 text-gray-500">
          <nav className="flex justify-center max-w-4xl p-4 mx-auto text-sm md:p-8">
            <Link
              className="block mt-4 ml-3 no-underline md:inline-block md:mt-0 md:ml-6"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block mt-4 ml-3 no-underline md:inline-block md:mt-0 md:ml-6"
              to="/faq"
            >
              Voter FAQ
            </Link>{" "}
            <Link
              className="block mt-4 ml-3 no-underline md:inline-block md:mt-0 md:ml-6"
              to="/about"
            >
              About
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

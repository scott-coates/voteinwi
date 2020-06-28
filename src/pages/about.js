import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `vote in wisconsin`,
          `vote in wi`,
          `wisconsin voting registration`,
          `wi voting registration`,
          `wisconsin mail-in ballots`,
          `wi mail-in ballots`,
          `wisconsin presidential election 2020`,
          `wi presidential election 2020`,
          `wisconsin general election 2020`,
          `wi general election 2020`,
        ]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <p className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            VoteInWI is an easy way to prepare yourself for the 2020 general
            election. For questions, please contact{" "}
            <a
              className="no-underline text-blue-700 hover:text-blue-800"
              href="mailto:scott.c.coates@gmail.com?subject=Vote in WI"
            >
              Scott Coates
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;

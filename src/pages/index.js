import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Collapse } from "react-collapse";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function InfoBox(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-box shadow">
      <article className="border-b" onClick={() => setIsOpen(!isOpen)}>
        <div className="border-transparent">
          <header className="flex justify-between items-center cursor-pointer select-none">
            <div className="bg-indigo-900  py-4 lg:px-8 w-full">
              <div
                className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  <svg
                    className="fill-current opacity-75 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z" />
                  </svg>
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  {props.title}
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </div>
          </header>
          <Collapse isOpened={isOpen}>
            <div className="pl-8 pr-8 pb-5 text-grey-darkest">
              {props.children}
            </div>
          </Collapse>
        </div>
      </article>
    </div>
  );
}
InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function IndexPage() {
  // const now = new Date();
  // const electionDate = new Date('Tuesday, November 3, 2020');
  // const daysUntilElection = parseInt((electionDate-now)/(24*3600*1000));
  // eslint-disable-next-line no-debugger
  // debugger;

  // Declare a new state variable, which we'll call "count"
  // const [info1, setDisplayInfo1] = useState(false);
  // const [info2, setDisplayInfo2] = useState(false);
  // const [info3, setDisplayInfo3] = useState(false);

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
        title="The Unofficial Wisconsin 2020 Voter's Guide"
      />
      <section className="">
        <h1 className="inline-block p-3 mb-12 text-4xl font-bold bg-gray-200 w-full">
          {" "}
          The Unofficial Guide to Voting in Wisconsin 2020
        </h1>
      </section>
      <div className="space-y-12">
        <section className="bg-gray-100">
          <h2 className="p-3 text-2xl font-bold bg-gray-100">
            Step 1: find your polling location
          </h2>

          <p className="leading-loose p-3">
            <a
              className="no-underline text-blue-700 hover:text-blue-800"
              href="https://myvote.wi.gov/en-US/FindMyPollingPlace"
            >
              &nbsp;Click here
            </a>{" "}
            to locate your polling place.
          </p>
        </section>
        <section className="bg-gray-100">
          <h2 className="p-3 text-2xl font-bold">
            Step 2: bring the required documents
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              Make sure you bring both a
              <a
                className="no-underline text-blue-700 hover:text-blue-800"
                href="https://myvote.wi.gov/en-us/ProofofResidence"
              >
                &nbsp;proof of residency document
              </a>
              &nbsp;and a
              <a
                className="no-underline text-blue-700 hover:text-blue-800"
                href="https://myvote.wi.gov/en-us/PhotoIDRequired"
              >
                &nbsp;form of I.D
              </a>
              &nbsp;along to register on Election Day.
            </p>
          </div>
        </section>
        <section className="bg-gray-100">
          <h2 className="p-3 text-2xl font-bold">
            Step 3: plan to vote Tuesday, November 3rd
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              Unless you live in a big city or neighborhood, it should take less
              than 20 minutes to vote. Plan ahead!
            </p>
          </div>
        </section>
        {/* 
          <section className="bg-gray-100">
          <h2 className="p-3 text-2xl font-bold bg-gray-100">
            Step 1: register to vote (2 min)
          </h2>

          <p className="leading-loose p-3">
            <a
              className="no-underline text-blue-700 hover:text-blue-800"
              href="https://myvote.wi.gov/en-us/RegisterToVote"
            >
              &nbsp;Click here to register online.&nbsp;
            </a>
            Before you start, grab your
            <span className="font-bold">&nbsp;photo ID.</span>
          </p>
        </section>
        <section className="bg-gray-100">
          <h2 className="p-3 text-2xl font-bold">
            Step 2: get your mail-in ballot (2 min)
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              <a
                className="no-underline text-blue-700 hover:text-blue-800"
                href="https://myvote.wi.gov/en-US/VoteAbsentee"
              >
                &nbsp;Click here to request your absentee ballot.
              </a>{" "}
              Again, grab your
              <span className="font-bold">&nbsp;photo ID.</span>
            </p>{" "}
          </div>
        </section>
        */}
        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold">How can I learn more?</h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              <Link
                className="no-underline text-blue-700 hover:text-blue-800"
                to="/faq"
              >
                Click here to view the voter FAQ.
              </Link>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;

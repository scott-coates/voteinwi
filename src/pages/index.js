import React, { useState } from "react";
import PropTypes from "prop-types";

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
        title="The Unofficial, Non-Spammy Wisconsin 2020 Voter's Guide"
      />
      <section className="">
        <h1 className="inline-block p-3 mb-12 text-4xl font-bold bg-gray-200 w-full">
          {" "}
          The Unofficial, Non-Spammy Guide to Voting in Wisconsin 2020
        </h1>
      </section>
      <div className="space-y-12 mb-48">
        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold bg-gray-100">
            When is the 2020 presidential election?
          </h2>

          <p className="leading-loose p-3">
            The presidential election date in Wisconsin is
            <span className="font-bold">&nbsp;Tuesday, November 3, 2020.</span>
          </p>
        </section>
        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold">
            Can I vote in the Wisconsin presidential election?
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">Probably. To register in Wisconsin you must:</p>
            <ul className="list-disc list-outside mb-6 pl-4">
              <li>Be a citizen of the United States.</li>
              <li>Be a resident of Wisconsin for at least 10 days.</li>
              <li>Be 18 years old or older.</li>
              <li>
                Not be incapable of understanding the objective of the elective
                process or under guardianship.
              </li>{" "}
              <li>
                Not have been convicted of treason, felony or bribery, or if you
                have, your civil rights have been restored.
              </li>
              <li className="ml-3">
                Convicted of a felony? Visit
                <a
                  className="no-underline text-blue-700 hover:text-blue-800"
                  href="https://campaignlegal.org/restoreyourvote"
                >
                  &nbsp;Restore Your Vote
                </a>
                &nbsp;to determine your eligibility to vote.
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold">
            When is the deadline for registering to vote in the Wisconsin
            presidential election?
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              First, you can register to vote in person at your polling place on
              Election Day. Make sure you bring both a
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

            <p className="mb-3">
              If you want to save time and avoid the hassle of registering on
              Election Day, it&apos;s super easy to register other ways:
            </p>
            <ul className="list-disc list-outside mb-6 pl-4">
              <li className="">
                Online: Wednesday, October 14, 2020 (20 days before Election
                Day).
                <a
                  className="no-underline text-blue-700 hover:text-blue-800"
                  href="https://myvote.wi.gov/en-us/RegisterToVote"
                >
                  &nbsp;Click here to register online.
                </a>
              </li>
              <li>
                Mailing Your Election Office: Postmarked Wednesday, October 14,
                2020 (the 3rd Wednesday before Election Day).
                <a
                  className="no-underline text-blue-700 hover:text-blue-800"
                  href="https://elections.wi.gov/sites/elections.wi.gov/files/2019-11/EL-131%20Redesign%20fillable_1.pdf"
                >
                  &nbsp;Click here to print the form.
                </a>
              </li>
              <li>
                In Person at Your Election Office: Friday, October 30, 2020 (The
                Friday before Election Day).
                <a
                  className="no-underline text-blue-700 hover:text-blue-800"
                  href="https://elections.wi.gov/sites/elections.wi.gov/files/2019-11/EL-131%20Redesign%20fillable_1.pdf"
                >
                  &nbsp;Click here to print the form.
                </a>{" "}
                <span className="font-bold">
                  &nbsp;Bring your photo ID and proof of residency.
                </span>
              </li>
            </ul>
            <p className="mb-3">
              Remember, make sure you bring both a proof of residency document
              and a form of I.D. along no matter which kind of registration you
              choose.
            </p>
            <InfoBox
              title="Need the mailing address to your local election
                          office?"
            >
              <ul className="pt-4">
                <li className="pb-2">
                  Municipal clerks are in charge of elections for your city,
                  town, or village. Your municipal clerk handles voter
                  registrations and absentee ballots for voters in their
                  municipality.
                </li>
                <li className="pb-2">
                  <a
                    className="no-underline text-blue-700 hover:text-blue-800"
                    href="https://myvote.wi.gov/en-US/MyMunicipalClerk"
                  >
                    Click here to locate your municipal clerk.
                  </a>
                </li>
              </ul>
            </InfoBox>
          </div>
        </section>

        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold">
            Can I mail my vote to the Wisconsin presidential election?
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              Voting by mail, also known as absentee, early voting, etc. is easy
              to do
              <span className="font-bold">
                &nbsp;once you&apos;re registered.{" "}
              </span>
            </p>
            <p className="mb-3">
              In Wisconsin, if you&apos;re registered to vote, you&apos;re
              eligible to request an absentee ballot. Under state law, you do
              not need a reason or excuse to vote by mail.
              <span className="font-bold">
                &nbsp;Any voter who prefers to vote by absentee ballot may
                request one.
              </span>
            </p>{" "}
            <p className="mb-3">
              When voting absentee, you will either complete your ballot in
              person at your local election office OR receive and complete the
              ballot via mail.
            </p>{" "}
          </div>
        </section>

        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold">
            Why should I mail my vote for the Wisconsin presidential election?{" "}
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              Voting by mail is
              <span className="font-bold">
                &nbsp;cheaper, faster, and safer
              </span>{" "}
              than voting in person on Election Day.
            </p>
            <ul className="list-disc list-outside mb-6 pl-4">
              <li className="">
                <span className="font-bold">&nbsp;Cheaper</span>: Mail-in voting
                is 100% free. No postage required. It&apos;s cheaper than the
                cost of transporation to your local polling location.
              </li>
              <li className="">
                <span className="font-bold">&nbsp;Faster</span>: Back in the
                April 2020 Primary Election, voters in cities like Milwaukee and
                Green Bay had to wait in line for hours.
              </li>
              <li className="">
                <span className="font-bold">&nbsp;Safer</span>: Many polling
                sites were closed during the April 2020 Primary Election.
                Hundreds of poll workers had to stay home because of the
                pandemic. Your typical poll worker is a senior citizen, which is
                a high risk group for Covid-19.
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold">
            How do I mail my ballot in the Wisconsin presidential election?
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              Your completed absentee ballot{" "}
              <span className="underline">must be delivered</span> no later than{" "}
              <span className="font-bold">8 p.m. on Election Day. </span> The
              U.S. Postal Service recommends absentee ballots be mailed one week
              before Election Day to arrive in time.
            </p>
            <p className="mb-3">
              You have several options for requesting an absentee ballot and
              casting your vote.
            </p>
            <ul className="list-disc list-outside mb-6 pl-4">
              <li className="">
                Online: You must request a ballot no later than 5:00 p.m. on
                Thursday, October 29, 2020 in order for an absentee ballot to be
                SENT to you.
                <span className="font-bold">
                  &nbsp;You will need a copy of your photo id.
                </span>
                <a
                  className="no-underline text-blue-700 hover:text-blue-800"
                  href="https://myvote.wi.gov/en-US/VoteAbsentee"
                >
                  &nbsp;Request your absentee ballot by clicking here.
                </a>
              </li>
              <li>
                Mailing Your Election Office: You must request a ballot no later
                than 5:00 p.m. on Thursday, October 29, 2020 in order for an
                absentee ballot to be SENT to you.
                <span className="font-bold">
                  &nbsp;Send a copy of your photo id.
                </span>
                <a
                  className="no-underline text-blue-700 hover:text-blue-800"
                  href="https://elections.wi.gov/forms/el-121-english"
                >
                  &nbsp;Click here to print the form.
                </a>
              </li>
              <li>
                In Person at your Election Office: Contact your local election
                office for dates and hours of in-person absentee voting. You
                will vote your ballot immediately in the election office, seal
                your ballot in the proper envelope, and return it to a member of
                the clerk&apos;s staff. No ballots may be taken out of the
                election office.
                <span className="font-bold">&nbsp;Bring your photo ID.</span>
              </li>
            </ul>
            <p className="mb-3">
              Remember, you will need to provide a photo ID when requesting an
              absentee ballot by mail or in-person. More information about
              acceptable photo IDs can be found at{" "}
              <a
                className="no-underline text-blue-700 hover:text-blue-800"
                href="www.bringit.wi.gov"
              >
                www.bringit.wi.gov
              </a>
              .
            </p>
            <InfoBox title="Need to find your local election office?">
              <ul className="pt-4">
                <li className="pb-2">
                  Municipal clerks are in charge of elections for your city,
                  town, or village. Your municipal clerk handles voter
                  registrations and absentee ballots for voters in their
                  municipality.
                </li>
                <li className="pb-2">
                  <a
                    className="no-underline text-blue-700 hover:text-blue-800"
                    href="https://myvote.wi.gov/en-US/MyMunicipalClerk"
                  >
                    Click here to locate your municipal clerk.
                  </a>
                </li>
              </ul>
            </InfoBox>{" "}
          </div>
        </section>

        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}

          <h2 className="p-3 text-2xl font-bold">
            How much does it cost to I mail my ballot in the Wisconsin
            presidential election?
          </h2>

          <div className="leading-loose p-3">
            <p className="mb-3">
              <span className="font-bold">100% free </span>when your ballot is
              mailed back from within the U.S.
            </p>
          </div>
        </section>

        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}
          <h2 className="p-3 text-2xl font-bold">How can I help? </h2>
          <div className="leading-loose p-3">
            <p className="mb-3 font-bold">
              Volunteering as a poll worker at your local polling station!
            </p>
            <p className="mb-3">
              In April, during our last major presidential primary election,
              <span className="font-bold">
                &nbsp;97.3% of Milwaukee&apos;s
              </span>{" "}
              polling stations were closed because we didn&apos;t have enough
              volunteers.
            </p>
            <p className="mb-3">
              Green Bay had
              <span className="font-bold">&nbsp;93.3% of its</span> polling
              stations closed. La Crosse had
              <span className="font-bold">&nbsp;38.5%</span> polling stations
              closed, and Madison had
              <span className="font-bold">&nbsp;28%</span> closed.
            </p>
            <p className="mb-3">
              Polling sites were closed during the primary when there were not
              enough poll workers available due to the pandemic. Your typical
              poll worker is a senior citizen, which is a high risk group for
              Covid-19.
            </p>{" "}
            <p className="mb-3">
              Cities all across Wisconsin are looking for individuals interested
              in working the polling locations on an election day! If you are
              young and healthy, consider doing your part to make this a safe
              and fair election. (By the way, his is a paid position!){" "}
            </p>
            <p className="mb-3">
              Poll workers are appointed to two-year terms so you will be asked
              to make a minimum two-year commitment. However, committing to one
              election cycle (Primary/General) is also appreciated.
            </p>
            <p className="mb-3">
              You can contact your municipal clerk directly to find out more
              about the application process for your election office.{" "}
              <a
                className="no-underline text-blue-700 hover:text-blue-800"
                href="https://elections.wi.gov/elections-voting/voters/become-a-poll-worker"
              >
                &nbsp;Click here to see which positions are available.
              </a>{" "}
            </p>
          </div>  <div className="leading-loose p-3">
            <p className="mb-3 font-bold">
              Encourage your friends and family to vote
            </p>

            <p className="mb-3">
              Every vote counts. Talk to your friends and family about the
              election and encourage them to vote. You can help them register by
              sharing this page. And remember to help them request an absentee
              ballot so they can vote early.
            </p>
          </div>
          <div className="leading-loose p-3">
            <p className="mb-3 font-bold">Share your vote plan with others</p>

            <p className="mb-3">
              You’re more likely to follow through on your plan if you announce
              it to your friends and family. Sharing your game plan to vote also
              encourages others to consider how they will vote this year and if
              they need to take any special steps (like sign up for absentee
              voting) in order to do so.
            </p>
          </div>{" "}
        </section>
        <section className="bg-gray-100">
          {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}
          <h2 className="p-3 text-2xl font-bold bg-gray-100">
            Where is the official Wisconsin voter website?
          </h2>
          <p className="leading-loose p-3">
            First off, please remember&nbsp;
            <span className="underline">this guide</span>&nbsp;is not the
            official Wisconsin voter&apos;s website.
          </p>
          <p className="leading-loose p-3">
            The <span className="font-bold">&nbsp;official </span>
            Wisconsin voter&apos;s website can be found at{" "}
            <a
              className="no-underline text-blue-700 hover:text-blue-800"
              href="https://myvote.wi.gov/"
            >
              {" "}
              https://myvote.wi.gov/
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;

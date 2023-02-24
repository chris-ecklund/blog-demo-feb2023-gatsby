import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import "../scss/styles.scss";

const AboutPage = (data) => {
  return (
    <Layout pageTitle="About Me">
      {/* <h2 className="red-find-border">About Me</h2> */}
      <p className=''>
        I am a resident of Orlando, Florida. There is a lot to see and do; check out the blog posts!
      </p>
      <p>
        Thank you for visiting the site!
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;

//---------
//this is link for deployed site as of 3:20 PM 2/23/2023
//https://build-f442016f-f9c1-4aaa-8dbc-bccdd8965742.gatsbyjs.io/

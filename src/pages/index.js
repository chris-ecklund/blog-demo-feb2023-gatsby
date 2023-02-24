import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

import "../scss/styles.scss";

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Travel Blog!">
      {/* <h2 className=''>Welcome to my Travel blog!</h2> */}
      <p>
        Hi there! I'm the proud creator of this site, which I built with the following tools:
      </p>
      <ul>
        <li>Gatsby</li>
        <li>React</li>
        <li>GraphQL</li>
        <li>SASS and CSS</li>
        <li>Markdown Files to dynamically create new blog post pages.</li>
        <li>Dynamic Images on the blog posts.</li>

      </ul>
      <p>
        Please enjoy browsing these blog posts of tourist sites in Orlando, Florida!
      </p>
      <StaticImage alt="cloud" src="../images/Vector-Travel-PNG-Image.png" className='image-radius '/>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;

// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <h1>About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

// Step 4
//export const Head = () => <title>About Me</title>;
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage;

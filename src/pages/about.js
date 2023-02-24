// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from '../components/seo'

import '../scss/styles.scss';

// Step 2: Define your component
const AboutPage = (data) => {

  return (
    
    <Layout pageTitle="About Me" >
      
      <h1 className='red-find-border red-text'>About Me</h1>
      <p className='red-find-border'>
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

//---------
//this is link for deployed site as of 3:20 PM 2/23/2023
//https://build-f442016f-f9c1-4aaa-8dbc-bccdd8965742.gatsbyjs.io/
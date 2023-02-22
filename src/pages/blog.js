import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      nodes {
        name
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  //console.log("the query returns: ", {data.allFile.nodes});

  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>

      <p>new query node names below</p>

      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

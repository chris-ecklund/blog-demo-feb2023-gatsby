import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

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
    allMdx(sort: {frontmatter: {datePublished: DESC}}) {
      nodes {
        frontmatter {
          name
          postTitle
          slug
          datePublished(formatString: "MMMM DD, YYYY")
        }
        excerpt
        id
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

      <p>try using the article html element</p>

      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.postTitle}</h2>
            <p>Posted: {node.frontmatter.datePublished}</p>
            <p>{node.excerpt}</p>
            
          </article>
        ))
      }
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

//friday, pick up here
//1. Start by using GraphiQL to create a page query for your blog post page template
// 3/4 way down the part6 page
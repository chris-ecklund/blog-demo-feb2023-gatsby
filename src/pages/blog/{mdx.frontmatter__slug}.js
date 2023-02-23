import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        postTitle
        slug
        datePublished(formatString: "MMMM D, YYYY")
        
      }
    }
  }
`;

//not yet-----images-------------------------
// hero_image_alt
// hero_image_credit_link
// hero_image_credit_text
// hero_image {
//   childImageSharp {
//     gatsbyImageData
//   }
//-------------------------------------------

// const BlogPost = () => {
//   return (
//     <Layout pageTitle="Super Cool Blog Posts">
//       <p>My blog post contents will go here (eventually).</p>
//     </Layout>
//   )
// }

const BlogPost = ({ data, children }) => {
  //const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.postTitle}>
      <p>{data.mdx.frontmatter.datePublished}</p>

      {/* <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p> */}

      {children}
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

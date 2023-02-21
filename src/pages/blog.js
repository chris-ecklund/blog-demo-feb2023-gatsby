import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function About({data}) {
    return (
        <Layout>
          <p>About</p>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

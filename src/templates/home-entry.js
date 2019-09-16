import React, { useEffect } from 'react'
import Home from '../components/Home';
import { Link } from "gatsby";
import Layout from "../components/layout"
import { testExpr } from '../helpers/dataManipulation';

const HomeEntry = ({ pageContext }) => {
  useEffect(() => {
    console.log({HomeEntry: pageContext});
  });
  
  const filteredPosts = pageContext
    .entries
    .filter(({ node }) => 
      testExpr(`${pageContext.lang}\/`, node.full_slug))
    .filter(({ node }) => JSON.parse(node.content).component === 'post');

  return (
    <Layout lang={pageContext.lang}>
      <Home
        posts={filteredPosts}
      />
    </Layout>
  );
}

export default HomeEntry;

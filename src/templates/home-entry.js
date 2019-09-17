import React, { useEffect } from 'react'
import Home from '../components/pages/Home';
import { Link } from "gatsby";
import Layout from "../components/layout/Layout"
import { testExpr } from '../helpers/dataManipulation';

const HomeEntry = ({ pageContext }) => {
  useEffect(() => {
    console.log({HomeEntry1: pageContext});
  });
  
  const filteredPosts = pageContext
    .entries
    .filter(({ node }) => 
      testExpr(`${pageContext.lang}\/`, node.full_slug))
    .filter(({ node }) => JSON.parse(node.content).component === 'post');

  return (
    <Layout lang={pageContext.lang} categories={pageContext.categories}>
      <Home
        posts={filteredPosts}
      />
    </Layout>
  );
}

export default HomeEntry;

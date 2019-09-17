import React, { useEffect } from 'react'
import Category from '../components/pages/Category';
import Layout from "../components/layout/Layout"
import { Link } from "gatsby";

const CategoryEntry = ({pageContext}) => {
  useEffect(() => {
   console.log({asdasdsa: pageContext});
  });
  // przefiltruj
  return (
    <Layout lang={pageContext.lang} categories={pageContext.categories}>
      <Category
        posts={pageContext.entries}
        category={pageContext.category}
      />
    </Layout>
  );
}

export default CategoryEntry;

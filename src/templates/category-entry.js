import React, { useEffect } from 'react'
import Category from '../components/category';
import Layout from "../components/layout"
import { Link } from "gatsby";

const CategoryEntry = ({pageContext}) => {
  useEffect(() => {
   console.log({asdasdsa: pageContext});
  });
  // przefiltruj
  return (
    <Layout lang={pageContext.lang}>
      <Category
        posts={pageContext.entries}
        category={pageContext.category}
      />
    </Layout>
  );
}

export default CategoryEntry;

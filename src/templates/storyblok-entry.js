import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import Category from '../components/pages/Category';
import Page from '../components/pages/Page';

const PAGE_COMPONENTS = {
  page: Page,
  category: Category,
}

const StoryblokEntry = ({ pageContext }) => {
  if (!pageContext) { return null; }

  const SpecificComponent = PAGE_COMPONENTS[pageContext.story.content.component];
  return (
    <Layout
      lang={pageContext.lang}
      categories={pageContext.categories}
      pages={pageContext.pages}
    >
      <SpecificComponent {...pageContext} />;
    </Layout>
  )
};

export default StoryblokEntry
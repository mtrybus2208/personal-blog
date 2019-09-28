import React, {useEffect, useState} from 'react';
import Layout from '../components/layout/Layout';
import Components from '../components/layout/Components';

const StoryblokEntry = ({ pageContext }) => {
  if (!pageContext) { return null; }

  const key = pageContext.story && pageContext.story.content.component || 'home';
  const SpecificComponent = Components(key);
  const {
    lang,
    categories,
    pages,
    story,
    posts
  } = pageContext;
  
  return (
    <Layout
      lang={lang}
      categories={categories}
      pages={pages}
    >
      <SpecificComponent 
        key={story.content._uid}
        blok={story.content}
        posts={posts}
        lang={lang}
      /> 
    </Layout>
  )
};

export default StoryblokEntry;
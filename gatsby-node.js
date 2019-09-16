const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')
    const categoryEntry = path.resolve('src/templates/category-entry.js');
    const homeEntry = path.resolve('src/templates/home-entry.js');
    resolve(
      graphql(
        `{
          allStoryblokEntry {
            edges {
              node {
                id
                name
                created_at
                published_at
                uuid
                slug
                full_slug
                content
                is_startpage
                parent_id
                group_id
                lang
              }
            } 
          }
        }`
      ).then(result => {
        
 
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        

        const entries = result.data.allStoryblokEntry.edges;

        const cats = ['js', 'react', 'angular', 'vue'];
        ['en', 'pl'].forEach((lang) => {
          createPage({
            path: `/${lang}`,
            component: homeEntry,
            context: {
              entries: entries,
              lang,
            }
          })

          cats.forEach(cat => {
            createPage({
              path: `/${lang}/${cat}`,
              component: categoryEntry,
              context: {
                entries: entries,
                category: cat,
                lang,
              }
            })
          });
        })
 
        entries.forEach((entry, index, array) => {
          console.log(entry.node.full_slug);
          let pagePath = entry.node.full_slug == 'home' ? '' : `${entry.node.full_slug}/`
          console.log(pagePath);
          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node,
              entries: array,
              lang: entry.node.full_slug.split('/')[0],
            }
          })
        })
      })
    )
  })
}
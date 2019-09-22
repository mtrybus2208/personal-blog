const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js');
    const categoryEntry = path.resolve('src/templates/category-entry.js');
    const homeEntry = path.resolve('src/templates/home-entry.js');

    resolve(
      graphql(
        `{
          pages: allStoryblokEntry {
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

          categories: allStoryblokEntry(filter: {field_component: {eq: "category"}}) {
            edges {
              node {
                name
                full_slug
                slug
              }
            }
          }

          page22g: allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
            edges {
              node {
                name
                slug
                full_slug
                content
                is_startpage
                parent_id
              }
            }
          }
          page22g: allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
            edges {
              node {
                name
                slug
                full_slug
                content
                is_startpage
                parent_id
              }
            }
          }
        }`
      )
      .then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        
        const categories = result.data.categories.edges;
        const entries = result.data.pages.edges;
        const cats = result.data.page22g.edges;
        console.log('cats');
        console.log(cats);
        ['en', 'pl'].forEach((lang) => {
          createPage({
            path: `/${lang}`,
            component: homeEntry,
            context: {
              entries: entries,
              lang,
              categories, 
            }
          })

          categories.forEach(cat => {
            createPage({
              path: `/${lang}/${cat.node.name}`,
              component: categoryEntry,
              context: {
                entries: entries,
                category: cat.node.name,
                lang,
                categories
              }
            })
          });
        })
 
        entries.forEach((entry, index, array) => { 
          let pagePath = entry.node.full_slug == 'home' ? '' : `${entry.node.full_slug}/`
          console.log(pagePath);
          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node,
              entries: array,
              lang: entry.node.full_slug.split('/')[0],
              categories
            }
          })
        })
      })
    )
  })
}
/**
 * gotowe gewry to pobierania wszystkich postow np z vue
 * 
{
  PostItems(filter_query:{
   	 	category: {
        in: "b58ee670-368f-477d-95b6-0cc380aa2b5d"
      }
  }) {
    total
    items {
      content {
        title
        category
      }
    }
  }
}
 * 
 * 
 */

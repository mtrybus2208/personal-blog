const path = require('path');

const testExpr = (expr, str) => {
  const reg = new RegExp(expr);
  return reg.test(str);
};


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js');

    resolve(
      graphql(
        `{
          storyblok {
            categories: CategoryItems {
              total
              items {
                name
                content {
                  title
                  component
                  img
                }
                id
                group_id
                uuid
                full_slug
                slug
              }
            }

            pages: PageItems {
              total
              items {
                content {
                  title
                  content
                  component
                  _uid
                }
                full_slug
                id
                meta_data
                slug
                uuid
              }
            }

            posts:  PostItems {
              total
              items {
                full_slug
                slug
                name
                published_at
                content {
                  title
                  thumbnail
                  summary
                  lang
                  date
                  content
                  component
                  category
                  _uid
                }
              }
            }
          }
        }`
      )
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const categories = result.data.storyblok.categories.items;
        const posts = result.data.storyblok.posts.items;
        const pages = result.data.storyblok.pages.items;

        categories.forEach(cat => {
          ['en', 'pl'].forEach(lang => {
            createPage({
              path: `/${lang}/${cat.slug}`,
              component: storyblokEntry,
              context: {
                posts: posts
                  .filter(
                    post => post.content.category === cat.uuid &&
                    testExpr(`${lang}\/`, post.full_slug)
                  ),
                lang,
                story: cat, 
                categories,
                pages,
              }
            })   
          });
        });
        
        posts.forEach(cat => {
          ['en', 'pl'].forEach(lang => {
            createPage({
              path: `/${lang}/${cat.slug}`,
              component: storyblokEntry,
              context: {
                lang,
                story: cat, 
                categories,
                pages,
              }
            })   
          });
        });

        pages.forEach(page => {
          ['en', 'pl'].forEach(lang => {
            createPage({
              path: `/${lang}/${page.slug}`,
              component: storyblokEntry,
              context: {
                lang,
                story: page,
                categories,
                pages,
              }
            })   
          });
        });

        ['en', 'pl'].forEach(lang => {
          createPage({
            path: `/${lang}/`,
            component: storyblokEntry,
            context: {
              lang,
              posts: posts
                .filter(post => testExpr(`${lang}\/`, post.full_slug)),
              categories,
              pages,
              story: {
                content: {
                  component: 'home',

                }
              }
            }
          })   
        });

      })
    )
  })
}
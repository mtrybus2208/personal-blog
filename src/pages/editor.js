import React from 'react'
import Components from '../components/layout/Components';
import SbEditable from 'storyblok-react';
import config from '../../gatsby-config'; 
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout";

const loadStoryblokBridge = function(cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=MsR6FTXmrRHmv3J6Kofbpwtt`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = function(val) {
  var result = ''
  var tmp = []

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function (item) {
      tmp = item.split('=')
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {story: null}
  }

  componentDidMount() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
  }

  loadStory(payload) {
    window.storyblok.get({
      slug: getParam('path'),
      version: 'draft'
    }, (data) => {
      this.setState({story: data.story})
    })
  }

  initStoryblokEvents() {
    this.loadStory({storyId: getParam('path')})

    let sb = window.storyblok

    sb.on(['change', 'published'], (payload) => {
      this.loadStory(payload)
    })

    sb.on('input', (payload) => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(payload.story.content, payload.story.id)
        this.setState({story: payload.story})
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return (<div></div>)
    }
    
    const { content, full_slug } = this.state.story;

    return (
        <StaticQuery
          query={graphql`
          {
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
          }
          `}
          render={data =>   {
            return (
              <SbEditable content={content}>
                <Layout
                  lang={full_slug.split('/')[0]}
                  categories={data.storyblok.categories.items}
                  pages={data.storyblok.pages.items}
                >
                {React.createElement(Components(content.component), {
                  key: content._uid,
                  blok: content
                })}
              </Layout>
              </SbEditable>
            )
          } }
        />
    )
  }
}

export default StoryblokEntry
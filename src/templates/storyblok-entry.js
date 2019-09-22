import React from 'react'
import Components from '../components/layout/Components'
import Layout from "../components/layout/Layout";

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
 
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    console.log({entryy: props.pageContext});
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)
    story.lang = props.pageContext.lang
    
    return { story }
  }

  constructor(props) {
    super(props)
 
    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    const content = this.state.story.content;
    const lang = this.state.story.lang;
    console.log({stejt: this.state});
    return (
      <Layout lang={lang}>
        {React.createElement(Components(content.component), {key: content._uid, blok: content, })}
      </Layout>
    )
  }
}

export default StoryblokEntry
import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import Post from './post' 
import Portfolio from './portfolio' 
import About from './about'  
import ComponentNotFound from './component_not_found'

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  post: Post,
  about: About, 
}

const Components = (type) => {
  console.log({type});
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
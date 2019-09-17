import Page from '../pages/Page';
import Post from '../pages/Post';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About'; 
import ComponentNotFound from '../shared/component_not_found';

const ComponentList = {
  page: Page,
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
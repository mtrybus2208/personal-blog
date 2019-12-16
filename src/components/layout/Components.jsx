import Page from '../pages/Page';
import Post from '../pages/Post';
import Home from '../pages/Home';
import Category from '../pages/Category';
import ComponentNotFound from '../shared/component_not_found';

const ComponentList = {
  page: Page,
  category: Category,
  home: Home,
  post: Post,
};

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;

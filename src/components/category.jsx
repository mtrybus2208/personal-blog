import React, { useEffect } from 'react'; 
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import { testExpr } from '../helpers/dataManipulation';

import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
`;

const Category = ({
  posts,
  category,
}) => {
  useEffect(() => {
    console.log({posts});
    console.log({category});
  });
 
  const filteredPosts = posts
  .filter(({ node }) => 
    testExpr(`\/${category}\/`, node.full_slug))
  .map(({ node }, i) => {
    const { id, full_slug, name } = node;
    return (
      <Link
        key={id}
        to={`/${full_slug}`}
        style={{
          color: `#222`,
          textDecoration: `none`,
        }}
      >
      {++i}. {name}
      </Link>  
    );
  });
 
 return (
  <Container>
    <h1>Kategoria: {category}</h1>
    {filteredPosts}
  </Container>
)
}
export default Category;
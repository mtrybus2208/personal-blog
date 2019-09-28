import React, { useEffect } from 'react'; 
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
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
  lang,
  blok,
}) => {
  const filteredPosts = posts && posts
  .map((post, i) => {
    const { slug, content } = post;
    return (
      <Link
        key={content.uuid}
        to={`${lang}/${slug}`}
        style={{
          color: `inherit`,
          textDecoration: `none`,
        }}
      >
      {++i}. {content.title}
      </Link>  
    )
  });
 
 return (
  <Container>
    <h1>Kategoria: {blok.title}</h1>
    {filteredPosts}
  </Container>
)
}
export default Category;
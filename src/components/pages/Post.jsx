import React, { useEffect } from 'react'; 
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
`;

const Post = ({ story, lang, blok }) => {
  useEffect(() => {

  });
  if(!blok.content) {
    return null
  }
 return (
  <Container>
     <h1>{blok.content.title}</h1>
     <ReactMarkdown source={blok.content} />
  </Container>
)
}
export default Post;
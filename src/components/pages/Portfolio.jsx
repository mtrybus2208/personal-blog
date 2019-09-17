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

const Portfolio = ({ blok }) => {
  useEffect(() => {
    console.log({postProps: blok})
  });
 return (
  <Container>
     <h1>Hello from portfolio - problem with "ABOUT" page is lauing in schema, we need to add schema to about page!!!!!!!</h1>
     <ReactMarkdown source={blok.content} />
  </Container>
)
}
export default Portfolio;
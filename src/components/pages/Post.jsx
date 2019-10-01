import React, { useEffect } from 'react'; 
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H1, Par } from '../shared/Typography/Headings';

export const Container = styled.div`
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border: 30px solid #1f2429;
`;

const Code = styled.code`
    font-family: Menlo,Roboto Mono,Courier New,monospace;
    font-size: 13px;
    color: #b3b9c5;
    direction: ltr;
    text-align: left;
    white-space: pre-wrap;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.7;
    font-weight: 400;
    margin: 2rem 0;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    border-radius: 4px;
    background: #1f2429;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    max-width: 70%;
    margin: 40px auto;
    max-height: 605px;
    overflow: auto;

    &::-webkit-scrollbar-track
    { 
      background-color: #181a1d;
    }

    &::-webkit-scrollbar
    {
      width: 10px;
      background-color: #181a1d;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: #111; 
    }
`;

const CustomLink = styled.a`
 cursor: pointer;
  background:
     linear-gradient(
       to bottom, #c37e18 0%,
       #c37e18 100%
     );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 1px;
  text-decoration: none;
  color: inherit!important;
  transition: background-size .2s;

  &:hover {
    background-size: 4px 50px; 
    transition: background-size .5s;
  }
`

const Post = ({
  story,
  lang,
  blok,
}) => {
  if(!blok.content) {
    return null
  }

  return (
    <Container>
      <Markdown
        children={blok.content}
        options={{
          overrides: {
            CustomLink: {
                component: CustomLink,
            },
            Code: {
              component: Code,
            }
          },
        }}
      />      
    </Container>
  )
}
export default Post;
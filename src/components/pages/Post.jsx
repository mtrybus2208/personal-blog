import React, { useEffect } from 'react'; 
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import Code from '../shared/Code';
import Prism from "prismjs";
import {
  H1,
  Par
} from '../shared/Typography/Headings';
import Container from '../shared/Container';
 

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
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, [])

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
            p: {
              component: Par,
            },
            code: {
              component: Code,
            }
          },
        }}
      />      
    </Container>
  )
}
export default Post;
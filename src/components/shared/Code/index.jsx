import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, obsidian, tomorrowNight, gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as S from './styles'; 

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
}; 

const Code = ({
  children,
  md,
}) => {
  const lang = children; 
  return (
    <S.Code>
      <SyntaxHighlighter
        language="javascript"
        style={tomorrowNight}
      >
        {children}
      </SyntaxHighlighter>
    </S.Code>
  )
}

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;
export default Code;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Icon from '../../../Icon';
import { StateContext } from '../../../../../context/globalContext';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import * as S from './styles';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const propTypes = {};

const defaultProps = {};

const TitleBox = ({ show }) => {
  const { menuOpen, toggleMenu, toggleTheme } = useContext(StateContext);

  const themeContext = useContext(ThemeManagerContext);

  const data = useStaticQuery(graphql`
    query {
      logoDark: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fixed(width: 125, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoLight: file(relativePath: { eq: "logo-light.png" }) {
        childImageSharp {
          fixed(width: 125, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    show && (
      <S.TitleBox menuOpen={menuOpen}>
        <S.Title>mtrybus.com</S.Title>
        {themeContext.isDark ? (
          <Img fixed={data.logoDark.childImageSharp.fixed} />
        ) : (
          <Img fixed={data.logoLight.childImageSharp.fixed} />
        )}
        <S.MenuTrigger onClick={toggleMenu}>
          <Icon color="#c3c1c1" size="18px">
            menu
          </Icon>
        </S.MenuTrigger>
      </S.TitleBox>
    )
  );
};

TitleBox.propTypes = propTypes;
TitleBox.defaultProps = defaultProps;
export default TitleBox;

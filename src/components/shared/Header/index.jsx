import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Icon from '../Icon';
import { StateContext } from '../../../context/globalContext';
import styled from 'styled-components';
import * as S from './styles';

const MenuButton = styled.span`
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
`;
 
const Header = ({ siteTitle, links, lang, categories }) => {
  const {
    menuOpen,
    toggleMenu,
  } = useContext(StateContext);

  const menuList = categories.map((cat, i) => (
      <S.MenuItem>
        <Link  
          key={i}
          to={`${lang}/${cat.node.name}`}
        >{cat.node.name}
        </Link>
      </S.MenuItem>
  ));

  return (
    <S.Header>
      {menuList}
    </S.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

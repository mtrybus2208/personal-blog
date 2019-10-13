import { Link } from "gatsby";
import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import Icon from '../Icon';
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { StateContext } from '../../../context/globalContext';
import MenuList from '../MenuList';
import * as S from './styles';

const propTypes = {
  lang: PropTypes.string,
  categories: PropTypes.array,
};

const defaultProps = {
  lang: '',
  categories: '',
};

const Header = ({
  lang,
  categories,
}) => {
  const {
    menuOpen,
    toggleMenu,
    toggleTheme
  } = useContext(StateContext);
  const themeContext = useContext(ThemeManagerContext);

  return (
    <S.Header>
      <S.HeaderCol> 
        <MenuList
          items={categories}
          lang={lang}
        />
      </S.HeaderCol>

      <S.HeaderCol>
        <S.ThemeItem
          onClick={() => themeContext.toggleDark()}
        >
          <Icon
            color="#c3c1c1"
            size="20px"
          >
            {themeContext.isDark
              ? 'wb_sunny'
              : 'nights_stay'
            }
          </Icon>   
        </S.ThemeItem>
      </S.HeaderCol>
    </S.Header>
  )
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;

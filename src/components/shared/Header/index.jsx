import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Icon from '../Icon';
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { StateContext } from '../../../context/globalContext';
import * as S from './styles';

const Header = ({ lang, categories }) => {
  const {
    menuOpen,
    toggleMenu,
    toggleTheme
  } = useContext(StateContext);
  const themeContext = useContext(ThemeManagerContext)

  const menuList = categories && categories.map((cat, i) => (
      <S.MenuItem>
        <Link  
          key={i}
          to={`${lang}/${cat.name}`}
        >{cat.name}
        </Link>
      </S.MenuItem>
  ));

  return (
    <S.Header>
      <S.HeaderCol>
        {menuList}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
 
import { StateContext } from '../../../context/globalContext';
import Icon from '../Icon';
import * as S from './styles';

const Sidebar = ({ siteTitle, links}) => {
  const {
    menuOpen,
    toggleMenu,
  } = useContext(StateContext);

  const menuLinks = links.map((item, i) => {
    return (
      <S.MenuItem>
        <Link 
          key={i}
          to={item.link}
        >
          <S.IconBox>
            <Icon
              color="#c3c1c1"
              size="18px"
            >
              bubble_chart
            </Icon>
          </S.IconBox>
          <S.LinkCopy>{item.name}</S.LinkCopy>
        </Link>
      </S.MenuItem>
    );
  })

  return (
    <S.Sidebar>
      <S.TitleBox>
        <S.Title>{siteTitle}</S.Title>
      </S.TitleBox>
      <S.MenuBox>
        <S.Menu>
        {menuLinks}
        </S.Menu>
         
      </S.MenuBox>
      <S.Footer>
        <S.FooterItem>
          <Icon
            color="#4a5158"
            size="25px"
          >
            cake
          </Icon>
        </S.FooterItem>
        <S.FooterItem
          border
        >
          <Icon
            color="#4a5158"
            size="25px"
          >
            print
          </Icon>
        </S.FooterItem>
        <S.FooterItem>
          <Icon
            color="#4a5158"
            size="25px"
          >
            school
          </Icon>
        </S.FooterItem>
      </S.Footer>
    </S.Sidebar>
  );
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar;

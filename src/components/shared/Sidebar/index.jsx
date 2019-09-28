import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { StateContext } from '../../../context/globalContext';
import FluidPanel from '../../shared/FluidPanel';
import LangItem from '../../shared/LangItem';
import Icon from '../Icon';
import * as S from './styles';

const Sidebar = ({ siteTitle, links, lang}) => {
  const {
    menuOpen,
    toggleMenu,
  } = useContext(StateContext);

  const menuLinks = links && links.map((item, i) => {
    return (
      <S.MenuItem>
        <Link 
          key={i}
          to={`${lang}/${item.slug}`}
        >
          <S.IconBox>
            <Icon
              color="#c3c1c1"
              size="18px"
            >
              bubble_chart
            </Icon>
          </S.IconBox>
          <S.LinkCopy>{item.content.title}</S.LinkCopy>
        </Link>
      </S.MenuItem>
    );
  });

  const langItems = ['pl', 'en'].map(lang => (
    <LangItem
      lang={lang}
    />
  ));

  const socialItems = ['cake', 'print', 'school'].map((name, i) => (
    <S.FooterItem>
      <Link
        key={i}
        to={`#`}
      >
      <Icon
        color="#4a5158"
        size="25px"
      >
        {name}
      </Icon>
      </Link>
    </S.FooterItem>
  ));

  return (
    <S.Sidebar>
      <S.TitleBox>
        <S.Title>{siteTitle}</S.Title>
      </S.TitleBox>
      <FluidPanel
        items={langItems}
        border={{
          bottom: true,
        }}
      />
      <S.MenuBox>
        <S.Menu>
        {menuLinks}
        </S.Menu>
         
      </S.MenuBox>
      <S.Footer>
        <FluidPanel
          items={socialItems}
          border={{
            top: true,
          }}
        />
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

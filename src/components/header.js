import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Icon from './Icon';
import { StateContext } from '../context/globalContext';
import styled from 'styled-components';

const MenuButton = styled.span`
  cursor: pointer;
  &:hover {
    opacity: .5;
  }
`;

 
const Header = ({ siteTitle, links, lang }) => {
  const {
    menuOpen,
    toggleMenu,
  } = useContext(StateContext);

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `25px`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <MenuButton
          onClick={toggleMenu}
        >
          <Icon>menu</Icon>
        </MenuButton>
        <h1 style={{ margin: 0 }}>
          <Link
            to={`/${lang}`}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
        {
          links.map((item, i) => {
            return (
              <Link 
                key={i}
                to={item.link}
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  margin: `20px 10px`,
                }}
                >
                {item.name}
              </Link>
            ) 
          })
        }
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Sidebar = styled.div`
    background: #1B1F23;
    color: #c3c1c1;
    font-family: roboto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-right: 1px solid #2F363D;
    max-height: 100vh;
`;

export const TitleBox = styled.div`
  padding: 25px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #2F363D;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const MenuBox = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px 0;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  align-items: flex-start;
  color: inherit;
  flex: 1 1 100%;
  list-style-type: none;
`;

export const MenuItem = styled.li`
    margin: 0;
    padding: 0;
    -webkit-text-decoration: none;
    text-decoration: none;
    flex: 1 1 100%;
    width: 100%;
    display: flex;

  a {
    color: inherit;
    text-transform: capitalize;
    padding: 20px 25px;
    display: flex;
    flex: 1;

    &:hover {
      text-decoration: none;
      background: #212529;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #2F363D;
`;

export const IconBox = styled.div`
  text-transform: none;
`;

export const LinkCopy = styled.div`
  padding-left: 15px;
`;

export const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  flex: 1 1 auto;
  border: ${({ border }) => {
    if(border) {
      return '1px solid #2F363D';
    }
    return 'none';
  }};
  border-top: none;
  border-bottom: none;
`;
 
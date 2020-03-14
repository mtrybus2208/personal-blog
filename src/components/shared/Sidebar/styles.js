import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Sidebar = styled.div`
  background-color: ${props => props.theme.background.base};
  color: ${props => props.theme.color};
  font-family: roboto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-right: 1px solid ${props => props.theme.borderColor.base};
  max-height: 100vh;
  position: absolute;
  left: 0;

  width: 100%;
  position: static;
  position: absolute;
  bottom: 0;
  max-height: 100vh;
  top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 50vw;
  /* ????????????? */
  z-index: 1049;
  position: fixed;
  top: 0px;
  bottom: 0px;
  transition: -webkit-transform 0.3s ease-out 0s;
  will-change: transform;
  overflow-y: auto;
  width: 600px;
  background-color: rgb(38, 50, 56);
  left: 0px;
  transform: translateX(0%);
  @media (min-width: 992px) {
    width: 300px;
    position: static;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px 0;
  padding-top: 0;
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
    padding: 15px 25px;
    display: flex;
    flex: 1;

    &:hover {
      text-decoration: none;
      background: ${props => props.theme.background.action};
    }
  }

  &:last-child {
    border-bottom: 1px solid ${props => props.theme.borderColor.base};
  }
`;

export const Footer = styled.div``;

export const IconBox = styled.div`
  text-transform: none;
`;

export const LinkCopy = styled.div`
  padding-left: 15px;
  font-size: 15px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;

export const FooterItem = styled.div`
  display: flex;
  flex: 1 1 auto;
  a {
    display: flex;
    flex: 1 1 auto;
    padding: 5px;
    justify-content: center;
    align-items: center;
    font-size: ${({ fontSize }) => fontSize || 14}px;
    color: inherit;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      background: ${props => props.theme.background.action};
    }
  }
`;

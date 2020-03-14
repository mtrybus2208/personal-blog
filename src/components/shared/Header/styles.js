import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const sharedItemStyle = props => css`
  border-right: 1px solid ${props => props.theme.borderColor.base};
  display: flex;
  justify-content: center;
  min-width: 150px;
  align-items: stretch;
  height: 100%;

  a {
    color: inherit;
    text-transform: capitalize;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    &:hover {
      text-decoration: none;
      background: ${props => props.theme.background.action};
    }
  }
`;

export const Header = styled.div`
  background: ${props => props.theme.background.base};
  color: ${props => props.theme.color};
  font-family: roboto;
  display: flex;
  min-height: 60px;
  border-bottom: 1px solid ${props => props.theme.borderColor.base};
  box-sizing: border-box;
  justify-content: space-between;
  font-size: 16px;
  flex-direction: column-reverse;
  position: fixed;
  bottom: 0;
  max-height: 100vh;
  top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 50vw;
  position: absolute;
  height: 100%;
  overflow-y: scroll;

  @media (min-width: 992px) {
    flex-direction: row;
    width: 100%;
    overflow-y: auto;
  }
`;

export const HeaderCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThemeItem = styled.div`
  ${sharedItemStyle};

  flex: 1 1 100%;
  height: 100px;
  border-bottom: 1px solid ${props => props.theme.borderColor.base};
  border-top: 1px solid ${props => props.theme.borderColor.base};
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background: ${props => props.theme.background.action};
  }

  @media (min-width: 992px) {
    height: 100%;
    border: none;
    border-bottom: none;
    border-left: 1px solid ${props => props.theme.borderColor.base};
  }
`;

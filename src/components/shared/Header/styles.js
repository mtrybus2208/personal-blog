import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;

export const HeaderCol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuItem = styled.div`
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

export const ThemeItem = styled(MenuItem)`
    border-left: 1px solid ${props => props.theme.borderColor.base};
    align-items: center;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      background: ${props => props.theme.background.action};
    }
`
 
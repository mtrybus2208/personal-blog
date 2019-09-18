import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Header = styled.div`
    background: #1B1F23;
    color: #c3c1c1;
    font-family: roboto;
    display: flex;
    min-height: 78px; 
    border-bottom: 1px solid #2F363D;
    box-sizing: border-box;
`;

export const MenuItem = styled.div`
    border-right: 1px solid #2F363D;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    align-items: stretch;

    a {
      color: inherit;
      text-transform: capitalize;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;

      &:hover {
        text-decoration: none;
        background: #212529;
      }
    }
`;
 
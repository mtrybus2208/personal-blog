import styled from 'styled-components';
import PropTypes from 'prop-types';

export const LangItem = styled.div`
    display: flex;
    flex: 1 1 auto;
    a {
      display: flex;
      flex: 1 1 auto;
      padding: 15px;
      justify-content: center;
      align-items: center;
      font-size: ${({fontSize}) => fontSize || 14}px;
      color: inherit;
      cursor: pointer;  
      
      &:hover {
        text-decoration: none;
        background: ${props => props.theme.background.action};
      }
    }
`;

export const LangCopy = styled.span`
    text-transform: uppercase;
    padding-left: 10px;
`;

import styled from 'styled-components';
import PropTypes from 'prop-types';

export const TitleBox = styled.div` 
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 60px; 
  padding: 5px;
  min-height: 60px;
  align-items: center;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1px;
  justify-content: space-between;
  border: none;
  flex: 1 1 100%;
  width: 100%;
  margin-left: ${({ menuOpen }) => menuOpen ? '100%' : 0};
  transition:  ${({ menuOpen }) => !menuOpen ? 'margin .2s linear' : 'none'}  ;
  
  @media (min-width: 768px) {     
    position: static;
    justify-content: center;
    height: auto;
    border-bottom: 1px solid ${props => props.theme.borderColor.base};
    flex: initial;
    margin-left: 0;
  }
`;

export const Title = styled.span`
  margin-left: 25px;
  font-size: 14px;
`;

export const MenuTrigger = styled.span`
  padding: 0 20px;
  text-transform: lowercase;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
    display: none;
    width: 54%;
    z-index: 123;
    margin-left: auto;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: 768px) {     
      display: flex;
    }
`;

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 50vw 50vw 100vw;
  grid-template-rows: 60px 1fr 1fr;
  grid-template-areas:
    "header  header header"
    "sidebar  menu content"
    "sidebar  menu content";
  background: ${props => props.theme.background.base};
  position: relative;
  transition: margin .2s linear;
  margin-left: ${({ menuOpen }) => menuOpen ? '-100%' : 0};
  overflow: ${({ menuOpen }) => !menuOpen ? 'hidden' : 'unset'};

  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
      "sidebar header"
      "sidebar content"
      "sidebar content";
    margin-left: 0;
    transition: none;
    overflow: unset;
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${300}px 1fr;
  }
`;

Grid.SidebarArea = styled.div`
  transition: all linear 400ms;
 
  grid-area: sidebar;
  position: relative; 
  z-index: 10;
  background: ${props => props.theme.background.base};

  @media (min-width: 768px) {     
    left: 0;
    grid-area: sidebar;
  }
`;

Grid.HeaderArea = styled.div`
  grid-area: menu; 
  position: relative;
  @media (min-width: 768px) {
      grid-area: header;
      margin-left: 0;
  }
`;

Grid.ContentArea = styled.div`
  grid-area: content;

  @media (min-width: 768px) {
    grid-area: content;
  }
`;
 

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredWrapper = styled(Centered)`
    height: 100%;
`;

export default Grid;



 
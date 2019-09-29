import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 100vw 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: "header header" "sidebar content" "sidebar content";
  background: ${props => props.theme.background.base};
  margin-left: -100vw;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
      "sidebar header"
      "sidebar content"
      "sidebar content";
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${300}px 1fr;
  }
`;

Grid.SidebarArea = styled.div`
  transition: all linear 400ms;
  grid-area: sidebar;
  position: relative;
  left: '100vw';
  z-index: 10;
  background: ${props => props.theme.background.base};

  @media (min-width: 768px) {     
    left: 0;
  }
`;

Grid.HeaderArea = styled.div`
  grid-area: header;
  margin-left: 100vw;

  @media (min-width: 768px) {
      margin-left: 0;
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

import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FluidPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${({border}) => border.top ?' 1px solid #2F363D' : 'none'};
  border-bottom: ${({border}) => border.bottom ?' 1px solid #2F363D' : 'none'};
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  border-top: none;
  border-bottom: none;
  border-right: 1px solid #2F363D;

  &:last-child {
    border-right: transparent;
  }

  &:hover {

  }
`;
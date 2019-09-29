import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FluidPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${({ border, theme }) => border.top ? `1px solid ${theme.borderColor.base}` : 'none'};
  border-bottom: ${({ border, theme }) => border.bottom ? `1px solid ${theme.borderColor.base}` : 'none'};
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  border-top: none;
  border-bottom: none;
  border-right: 1px solid ${props => props.theme.borderColor.base};

  &:last-child {
    border-right: transparent;
  }
`;
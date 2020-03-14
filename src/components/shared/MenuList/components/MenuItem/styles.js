import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  min-width: 150px;
  align-items: stretch;
  min-height: 100px;
  flex: 1 1 50%;
  height: auto;
  border: 1px solid ${props => props.theme.borderColor.base};

  @media (min-width: 992px) {
    border: none;
    border-right: 1px solid ${props => props.theme.borderColor.base};
    flex-wrap: auto;
    flex: auto;
    height: 100%;
    min-height: auto;
  }

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

export const ItemIcon = styled.img`
  width: ${({ size }) => {
    if (size === 'sm') {
      return '25px';
    }
  }};
`;

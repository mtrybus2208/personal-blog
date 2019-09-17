import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';

const MenuButton = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-family: 'Material Icons';
`;

const Icon = ({
  children,
  size = '40px',
  color = '#fff',
}) => {
  return (
    <MenuButton
      color={color}
      size={size}
    >
      {children}
    </MenuButton>
  );
}

export default Icon;
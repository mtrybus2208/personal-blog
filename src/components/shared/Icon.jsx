import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconWrap = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-family: 'Material Icons';
`;

const Icon = ({ children, size = '40px', color = '#fff' }) => {
  return (
    <IconWrap color={color} size={size}>
      {children}
    </IconWrap>
  );
};

export default Icon;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import * as S from './styles';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
export default Container;

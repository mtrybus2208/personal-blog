import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import * as S from './styles';

const propTypes = {
  items: PropTypes.array,
  border: PropTypes.object,
};

const defaultProps = {
  items: [],
  border: {},
};
 
const FluidPanel = ({
  items,
  border,
}) => {
  return (
    <S.FluidPanel
      border={border}
    >
      {items && items.map(item => {
        return (
          <S.Item>
            {item}
          </S.Item>
        );
      })}
    </S.FluidPanel>
  )
}

FluidPanel.propTypes = propTypes;
FluidPanel.defaultProps = defaultProps;
export default FluidPanel;

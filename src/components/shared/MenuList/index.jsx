import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './components/MenuItem';
import * as S from './styles';

const propTypes = {
  items: PropTypes.array,
  lang: PropTypes.string,
};

const defaultProps = {
  items: [],
  lang: '',
};
 
const MenuList = ({
  items,
  lang,
}) => {
  const itemsList = items && items.map((item, i) => (
    <MenuItem
      key={`${i}-${item.name}`}
      item={item}
      lang={lang}
    />
  ));

  return ( 
      <S.MenuList>
        {itemsList}     
      </S.MenuList>
    );
}

MenuList.propTypes = propTypes;
MenuList.defaultProps = defaultProps;
export default MenuList;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Icon from '../Icon';
import * as S from './styles';

const propTypes = {
  lang: PropTypes.string,
};

const defaultProps = { };
 
const LangItem = ({
  lang,
}) => {
  return (
    lang && (
      <S.LangItem>
        <Link
          to={`${lang}/`}
        >
          <Icon
            color="#c3c1c1"
            size="18px"
          >
            public
          </Icon>
          <S.LangCopy>
            {lang}
          </S.LangCopy>
        </Link>
      </S.LangItem>
    )
  )
}

LangItem.propTypes = propTypes;
LangItem.defaultProps = defaultProps;
export default LangItem;

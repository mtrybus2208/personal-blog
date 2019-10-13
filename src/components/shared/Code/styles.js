import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Code = styled.div`
  border: 10px solid ${({ theme }) => theme.background.action};
  margin: 30px auto;
  font-size: 14px;
  max-width: 80%;

  & > pre:first-child {
    margin: 0;
    padding: 25px!important;
  }
`;
 
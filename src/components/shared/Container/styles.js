import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 15px;
  border: 10px solid ${({ theme }) => theme.background.action};

  & > div {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  @media (min-width: 768px) {
    border: 30px solid ${({ theme }) => theme.background.action};
    padding: 70px;
  }

  @media (min-width: 1400px) {
    & > div {
      width: 80%;
    }
  }
`;

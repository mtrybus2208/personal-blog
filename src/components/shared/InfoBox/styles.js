import styled from 'styled-components';
import { darken } from 'polished';

export const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.background.action};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 30px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  padding: 30px;

  p {
    margin: 0;
    padding: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 20%;
  justify-content: center;
  padding: 30px;
  background-color: ${({ theme }) => darken(0.01, theme.background.action)};
`;

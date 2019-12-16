import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as S from './styles';

const InfoBox = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      info: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <S.InfoBox>
      <S.Content>{children}</S.Content>
      <S.IconWrapper>
        <Img fixed={data.info.childImageSharp.fixed} />
      </S.IconWrapper>
    </S.InfoBox>
  );
};
export default InfoBox;

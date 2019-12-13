import React, { useContext } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
 
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import * as S from './styles';

const propTypes = {
  item: PropTypes.object,
 
  lang: PropTypes.string,
};

const defaultProps = {
  item: {},
  lang: '',
};
 
const MenuItem = ({
  item,
  lang, 
}) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" }}) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  console.log({data});
  return ( 
    <S.MenuItem>
      <Link
        to={`${lang}/${item.name}`}
      >
      {
        data.images.edges
        .filter(img => {
          return img.node.name === item.name
        })
        .map(img => {
          return (
            <Img fixed={img.node.childImageSharp.fixed} />
          );
        })
      }
      </Link>
    </S.MenuItem>
  );
}


MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
export default MenuItem;

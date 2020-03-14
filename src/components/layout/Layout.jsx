import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';

import { StateContext } from '../../context/globalContext';
import { testExpr } from '../../helpers/dataManipulation';
import GlobalStyles from '../../context/globalStyles';
import Grid from './Grid';
import Header from '../shared/Header';
import Sidebar from '../shared/Sidebar';
import { useCheckDevice } from '../../shared/hooks/useCheckDevice';

const Layout = ({ children, lang, categories, pages }) => {
  const themeContext = useContext(ThemeContext);
  const { menuOpen } = useContext(StateContext);

  const { isTablet } = useCheckDevice();

  useEffect(() => {
    console.log({ isTablet });
  });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles theme={themeContext} />
      <Grid menuOpen={menuOpen}>
        <Grid.SidebarArea>
          <Sidebar
            lang={lang}
            links={
              pages &&
              pages.filter(page => testExpr(`${lang}\/`, page.full_slug))
            }
            siteTitle={data.site.siteMetadata.title}
          />
        </Grid.SidebarArea>

        <Grid.HeaderArea>
          {!isTablet && (
            <Header
              siteTitle={data.site.siteMetadata.title}
              lang={lang}
              categories={categories}
            />
          )}
        </Grid.HeaderArea>
        <Grid.ContentArea>
          <main>{children}</main>
        </Grid.ContentArea>
      </Grid>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

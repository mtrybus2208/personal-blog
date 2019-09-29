import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StateContext } from '../../context/globalContext';
import { testExpr } from '../../helpers/dataManipulation';
import { ThemeContext } from 'styled-components';
import GlobalStyles from '../../context/globalStyles';
 
import Grid from './Grid';
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import "./layout.css"

const Layout = ({
  children,
  lang,
  categories,
  pages,
}) => { 
  const themeContext = useContext(ThemeContext); 
 
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
  `) 

  return (
    <>
      <GlobalStyles theme={themeContext} />
      <Grid>
         <Grid.SidebarArea>
          <Sidebar
            lang={lang}
            links={pages && pages.filter(page => testExpr(`${lang}\/`, page.full_slug))}
            siteTitle={data.site.siteMetadata.title}
          />  
        </Grid.SidebarArea>
 
        <Grid.HeaderArea>
          <Header
            siteTitle={data.site.siteMetadata.title}
            lang={lang}
            categories={categories}
          />
        </Grid.HeaderArea>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StateContext } from '../../context/globalContext';
import styled from 'styled-components';
import { testExpr } from '../../helpers/dataManipulation';
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
  useEffect(() => {
    console.log({categories})
  });
 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          menuLinks {
            en {
              name
              link
            }
            pl {
              link
              name
            }
          }
          description
          title
        }
      }
    }
  `) 
  return (
    <>
      <Grid>
         <Grid.SidebarArea>  
          <Sidebar
            lang={lang}
            links={pages.filter(page => testExpr(`${lang}\/`, page.full_slug))}
            siteTitle={data.site.siteMetadata.title}
          />  
        </Grid.SidebarArea>

        <Grid.HeaderArea>
          <Header
            siteTitle={data.site.siteMetadata.title}
            links={data.site.siteMetadata.menuLinks[lang]}
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

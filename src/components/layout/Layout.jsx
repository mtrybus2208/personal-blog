import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StateContext } from '../../context/globalContext';
import styled from 'styled-components';
 
import Grid from './Grid';
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import "./layout.css"

const Layout = ({ children, lang, categories }) => {

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
     console.log({data})
    /**
     * trzeba zrobic reduxa i trzymac tam langa na starcie jakos zeby byl globalny :D 
     */
  return (
    <>
      {/*  */}
      <Grid>
        <Grid.SidebarArea>
          <Sidebar
            links={data.site.siteMetadata.menuLinks[lang]}
            siteTitle={data.site.siteMetadata.title}
          />
          {/* {
            categories.map((cat, i) => (
              <p>{++i}.{cat.node.name}</p>
            ))
          } */}
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
      {/*  */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

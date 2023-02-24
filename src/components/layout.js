import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

import "../scss/styles.scss";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='wrapper-fullpagesize-nopadding wrapper-addpadding background site-default-font'>
      <div className='wrapper-pagewidth center-column'>
        <header className='site-title'>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className='nav-links '>
            <li className='nav-link-item '>
              <Link to="/" className='nav-link-text '>
                Home
              </Link>
            </li>
            <li className='nav-link-item'>
              <Link to="/about" className='nav-link-text'>
                About
              </Link>
            </li>
            <li className='nav-link-item'>
              <Link to="/blog" className='nav-link-text'>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

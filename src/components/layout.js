import React from 'react'
import { graphql } from 'gatsby'

import Seo from './seo'
import Footer from './footer'

function Layout({ children }) {
  return (
    <>
      <Seo />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export const query = graphql`
  fragment SiteMetaData on Site {
    siteMetadata {
      socialLinks {
        vsco {
          name
          url
        }
        instagram {
          name
          url
        }
        twitter {
          name
          url
        }
        medium {
          name
          url
        }
        github {
          name
          url
        }
        youtube {
          name
          url
        }
        feyz {
          name
          url
        }
      }
    }
  }
`

export default Layout

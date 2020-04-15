import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="grid">
      <div className="col-content">content</div>
    </div>
  </Layout>
)

export default IndexPage
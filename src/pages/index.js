import React from 'react'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  ExternalLink,
  Header
} from '../components'

function IndexPage({ location }) {
  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>
            <ColContent>test yayını</ColContent>

            <ColExtra>
              <ExternalLink
                urls={[
                  { name: 'Twitter', url: 'https://twitter.com/ademilter' },
                  { name: 'YouTube', url: 'https://youtube.com/ademilter' },
                  { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

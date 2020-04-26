import React from 'react'

import Grid, { ColContent } from './grid'
import Html from './html'

import styles from './footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Grid>
          <ColContent>
            <Html>
              <p>
                Bu web sitesini GatsbyJS ile kodlayıp,{' '}
                <a
                  href="https://github.com/ademilter/homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kaynak kodlarını
                </a>{' '}
                github üzerinden paylaştım &lt;3
              </p>
            </Html>
          </ColContent>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer

import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import Grid, { ColSidebar } from './grid'

import styles from './header.module.css'

const MENU = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Fotoğraflar', url: '/photos' },
  { name: 'Eğitim Videoları', url: '/videos' },
  { name: 'Blog Yazıları', url: '/blog' },
  { name: 'Sıkça Sorulan Sorular', url: '/faq' },
  { name: 'Alıntılar', url: '/excerpts' },
  { name: 'Çalışma Masam', url: '/my-desk' }
]

function Header() {
  const [showNav, setShowMenu] = React.useState(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <Grid>
          <ColSidebar>
            <button
              type="button"
              className={styles.button}
              onClick={() => setShowMenu(!showNav)}
            >
              Fotoğraflar
            </button>

            {showNav && (
              <nav>
                {MENU.map(page => {
                  return (
                    <Link
                      key={page.url}
                      to={page.url}
                      activeClassName="active"
                      className={styles.link}
                    >
                      {page.name}
                    </Link>
                  )
                })}
              </nav>
            )}
          </ColSidebar>
        </Grid>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

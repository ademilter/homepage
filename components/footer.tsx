import React from 'react'
import A from 'components/a'

function Footer() {
  return (
    <footer className="pb-14">
      <div className="c-small">
        <p>
          Bu web sitesinin kaynak kodlarına{' '}
          <A href="https://github.com/ademilter/homepage" blank>
            Github üzerinden
          </A>{' '}
          ulaşabilirsiniz.
        </p>
      </div>
    </footer>
  )
}

export default Footer

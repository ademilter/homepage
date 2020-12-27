import { ArrowUpRight } from './icons'

import styles from './external-list.module.css'

function ExternalList({ urls = [] }) {
  return (
    <div className={styles.external}>
      {urls.map((link, i) => (
        <a
          key={i}
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          href={link.url}
        >
          {link.name}
          <ArrowUpRight className={styles.icon} />
        </a>
      ))}
    </div>
  )
}

export default ExternalList

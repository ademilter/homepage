import React from 'react'
import dayjs from 'dayjs'

import { ExternalLink } from './icons'

import styles from './faq-post.module.css'

function FaqPost({ id, createdAt, url, title, bodyHTML, labels }) {
  const [isShow, setShow] = React.useState(false)

  return (
    <article
      key={id}
      className={[styles.post, isShow ? 'open' : null].join(' ')}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.meta}>
        <span>
          {dayjs(createdAt)
            .locale('tr')
            .format('D MMMM YYYY')}
        </span>
        {' • '}
        <button
          type="button"
          className={styles.switch}
          onClick={() => setShow(!isShow)}
        >
          Detayı {isShow ? 'kapat' : 'aç'}
        </button>
      </p>

      {isShow && (
        <div>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: bodyHTML
            }}
          />
          <a
            className={styles.linkUrl}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Cevabı oku</span>
            <ExternalLink />
          </a>
        </div>
      )}
    </article>
  )
}

export default FaqPost

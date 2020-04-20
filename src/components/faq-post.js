import React from 'react'
import dayjs from 'dayjs'
import { graphql } from 'gatsby'

import { ExternalLink } from './icons'
import Button from './button'

import styles from './faq-post.module.css'

function FaqPost({ id, createdAt, url, title, bodyHTML }) {
  const [isShow, setShow] = React.useState(false)

  return (
    <article
      key={id}
      className={[styles.post, isShow ? 'open' : null].join(' ')}
    >
      {/* BODY */}
      <header>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <footer className={styles.footer}>
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
      </footer>

      {/* CONTENT */}
      {isShow && (
        <div>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: bodyHTML
            }}
          />
          <div>
            <Button
              className={styles.openLink}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Cevabı oku</span>
              <ExternalLink />
            </Button>
          </div>
        </div>
      )}
    </article>
  )
}

export const query = graphql`
  fragment IssueNode on GithubDataDataRepositoryIssuesEdgesNode {
    id
    createdAt
    url
    title
    bodyHTML
    labels {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default FaqPost

import React from 'react'
import moment from 'moment'
import { graphql } from 'gatsby'
import slugify from 'slugify'

import { ExternalLink } from './icons'
import Button from './button'
import Post from './post'
import Html from './html'

import styles from './faq-post.module.css'

function FaqPost({ createdAt, url, title, bodyHTML, location }) {
  const [isShow, showSet] = React.useState(false)
  const slug = slugify(title, { lower: true, strict: true })
  const { hash } = location

  React.useEffect(() => {
    if (`#${slug}` === hash) showSet(true)
    else showSet(false)
  }, [slug, hash])

  return (
    <Post
      id={slug}
      className={[styles.post, isShow ? 'open' : null].join(' ')}
      title={title}
    >
      <Post.Meta>
        <a href={`#${slug}`}>{moment.utc(createdAt).format('DD MMMM YYYY')}</a>
        {' • '}
        <button
          type="button"
          className={styles.switch}
          onClick={() => showSet(!isShow)}
        >
          Detayı {isShow ? 'kapat' : 'aç'}
        </button>
      </Post.Meta>

      <Post.Extra>
        {isShow && (
          <Html>
            <div
              className={styles.html}
              dangerouslySetInnerHTML={{
                __html: bodyHTML
              }}
            />
            <Button href={url} rel="noopener noreferrer" target="_blank">
              <span>Cevabı oku</span>
              <ExternalLink />
            </Button>
          </Html>
        )}
      </Post.Extra>
    </Post>
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

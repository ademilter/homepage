import React from 'react'
import dayjs from 'dayjs'
import { graphql } from 'gatsby'
import Fragment from 'react-dom-fragment'

import { ExternalLink } from './icons'
import Button from './button'
import Post from './post'
import Html from './html'

import styles from './faq-post.module.css'

function FaqPost({ createdAt, url, title, bodyHTML }) {
  const [isShow, setShow] = React.useState(false)

  return (
    <Post
      className={[styles.post, isShow ? 'open' : null].join(' ')}
      title={title}
    >
      <Post.Meta>
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
      </Post.Meta>

      <Post.Extra>
        {isShow && (
          <Html>
            <Fragment
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

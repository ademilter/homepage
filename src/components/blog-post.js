import React from 'react'
import url from 'url'
import dayjs from 'dayjs'

import { Link, Meta } from './index'

import styles from './blog-post.module.css'

function BlogPost({ frontmatter }) {
  const parseUrl = url.parse(frontmatter.url)

  return (
    <article className={styles.post}>
      <Link url={frontmatter.url}>
        <Meta
          title={frontmatter.title}
          desc1={frontmatter.desc}
          desc2={[
            dayjs(frontmatter.date)
              .locale('tr')
              .format('D MMMM'),
            parseUrl.host
          ].join(' • ')}
        />
      </Link>
    </article>
  )
}

export default BlogPost

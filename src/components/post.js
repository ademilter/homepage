import React from 'react'

import Link from './link'

import styles from './post.module.css'

function Post({ title, url, className, children }) {
  const childs = React.Children.map(children, child =>
    React.cloneElement(child, { ...child.props })
  )

  return (
    <article className={[styles.post, className].join(' ')}>
      {url ? (
        <Link url={url}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
      ) : (
        <h3 className={styles.title}>{title}</h3>
      )}

      {childs}
    </article>
  )
}

Post.Meta = ({ children }) => {
  return <div className={styles.meta}>{children}</div>
}

Post.Extra = ({ children }) => {
  return children && <div className={styles.extra}>{children}</div>
}

export default Post

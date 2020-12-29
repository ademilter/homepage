import AspectRatio from '@comp/aspect-ratio'

import styles from './figure.module.css'

function Base({ src, alt, ratio, children }) {
  return (
    <figure className={styles.figure}>
      {src && (
        <AspectRatio ratio={ratio}>
          <img src={src} alt={alt} />
        </AspectRatio>
      )}

      {children && (
        <figcaption className={styles.caption}>{children}</figcaption>
      )}
    </figure>
  )
}

function Figure({ href, children, ...rest }) {
  return href ? (
    <a className={styles.link} href={href}>
      <Base {...rest}>{children}</Base>
    </a>
  ) : (
    <Base {...rest}>{children}</Base>
  )
}

export default Figure

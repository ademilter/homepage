import styles from './html.module.css'

function Html({ children }) {
  return <div className={styles.html}>{children}</div>
}

export default Html

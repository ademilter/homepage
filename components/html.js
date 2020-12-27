import styles from './html.module.css'

function Html({ children }) {
  return <div className={styles.content}>{children}</div>
}

export default Html

import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './comment.module.css'

function CommentTextarea({ onSubmit, isSubmitting }) {
  const { isAuthenticated, user, loginWithPopup } = useAuth0()
  const [text, textSet] = useState('')

  console.log(user)

  const onBeforeSubmit = async (e) => {
    e.preventDefault()
    onSubmit(text)
  }

  return (
    <form onSubmit={onBeforeSubmit}>
      <textarea
        className={styles.textarea}
        rows="2"
        placeholder={`${user.name}, what are your thoughts?`}
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <>
            <div className="flex items-center space-x-4">
              <button className={styles.button} disabled={isSubmitting}>
                Send
              </button>
            </div>
            {/*<div className="ml-auto flex items-center space-x-2">*/}
            {/*  <img src={user.picture} width={26} className="rounded-full" />*/}
            {/*  <p>{user.name}</p>*/}
            {/*  <button*/}
            {/*    type="button"*/}
            {/*    onClick={() => {*/}
            {/*      logout()*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    x*/}
            {/*  </button>*/}
            {/*</div>*/}
          </>
        ) : (
          <button
            type="button"
            className={styles.button}
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  )
}

export default CommentTextarea

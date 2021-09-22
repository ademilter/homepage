import { useAuth0 } from '@auth0/auth0-react';
import styles from './comment.module.css';

function CommentTextarea({ text, textSet, onSubmit, isSubmitting }) {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const onBeforeSubmit = async (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <form onSubmit={onBeforeSubmit}>
      <textarea
        className={styles.textarea}
        rows="2"
        placeholder={`What are your thoughts?`}
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <button className={styles.button} disabled={isSubmitting}>
              Send
            </button>
          </div>
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
  );
}

export default CommentTextarea;

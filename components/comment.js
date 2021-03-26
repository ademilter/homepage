import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import { tr } from 'date-fns/locale'

function Comment() {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    user,
    loginWithPopup,
    logout
  } = useAuth0()
  const [commentText, commentTextSet] = useState('')
  const [comments, commentsSet] = useState([])
  const [isSubmitting, isSubmittingSet] = useState(false)

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch('/api/comment', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      commentsSet(data)
    }
    fetchComments()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()

    isSubmittingSet(true)

    const res = await fetch('/api/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, text: commentText })
    })
    const comment = await res.json()
    commentsSet([comment, ...comments])
    isSubmittingSet(false)
  }

  return (
    <div className="mt-6 pt-6 border-t border-gray-700">
      <form onSubmit={onSubmit}>
        <textarea
          className="
          p-3 rounded w-full bg-gray-200 text-gray-900 resize-y max-h-40 placeholder-gray-500
          focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none focus:bg-gray-100
          dark:bg-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:bg-gray-50"
          rows="2"
          placeholder="What are your thoughts?"
          onChange={(e) => commentTextSet(e.target.value)}
          value={commentText}
        />

        <div className="flex items-center mt-2">
          {isAuthenticated ? (
            <>
              <div className="flex items-center space-x-4">
                <img src={user.picture} width={30} className="rounded-full" />
                <p>{user.name}</p>
              </div>
              <div className="ml-auto">
                <button
                  type="button"
                  className="mr-4"
                  onClick={() => {
                    logout()
                  }}
                >
                  log out
                </button>
                <button
                  className="py-2 px-3 rounded bg-blue-800 text-white"
                  disabled={isSubmitting}
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <button
              type="button"
              className="
              ml-auto py-2 px-3 rounded bg-blue-800 text-white disabled:opacity-50"
              onClick={() => loginWithPopup()}
            >
              Log In
            </button>
          )}
        </div>
      </form>

      <div className="space-y-6 mt-6">
        {comments.map((comment) => {
          return (
            <div key={comment.created_at} className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  src={comment.picture}
                  width={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <div>
                  <b>{comment.name}</b>{' '}
                  <time className="text-gray-400">
                    {formatDistanceToNowStrict(comment.created_at, {
                      locale: tr
                    })}
                  </time>
                </div>
                <div>{comment.text}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comment

import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Comment() {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    user,
    loginWithPopup,
    logout
  } = useAuth0()
  const [commentText, commentTextSet] = useState('')

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch('/api/comment', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data)
    }
    fetchComments()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()

    const res = await fetch('/api/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token, text: commentText })
    })
    const data = await res.json()
    console.log(data)
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
              <div className="flex items-center">
                <img src={user.picture} width={30} className="rounded-full" />
                <p className="ml-2">{user.name}</p>
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
                <button className="py-2 px-3 rounded bg-blue-800 text-white">
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
    </div>
  )
}

export default Comment

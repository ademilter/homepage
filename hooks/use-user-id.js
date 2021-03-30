//  Stores a random userID in localStorage. Remove this once you have integrated

import { useEffect, useState } from 'react'
import { customAlphabet, nanoid } from 'nanoid'

//  your own authentication scheme.
export function useUserID() {
  const [userID, setUserID] = useState(null)

  //  useEffect forces this to happen on the client, since `window` is not
  //  available on the server during server-side rendering
  useEffect(() => {
    let userID = window.localStorage.getItem('roomservice-user')
    if (userID == null) {
      const generateBase62ID = customAlphabet(
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        22
      )
      userID = generateBase62ID()
      window.localStorage.setItem('roomservice-user', userID)
    }
    setUserID(userID)
  }, [])

  return userID
}

export default useUserID

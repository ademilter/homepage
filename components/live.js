import { usePresence } from '@roomservice/react'
import React, { useEffect, useState } from 'react'
import Cursor from '../components/cursor'
import useInterval from '../hooks/use-interval'
import useMousePosition from '../hooks/use-mouse-position'
import useUserID from '../hooks/use-user-id'

const COLORS = ['#4B47FF', '#F0451C', '#119F4E', '#984FFF']

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]

export default function Cat() {
  const { x, y } = useMousePosition()
  const [cursors, cursorsClient] = usePresence('cursors-room', 'joined')
  const [showLiveCursors, showLiveCursorsSet] = useState(true)
  const [color, colorSet] = useState(null)

  const userID = useUserID()

  useEffect(() => {
    colorSet(pickRandom(COLORS))
  }, [])

  useInterval(() => {
    cursorsClient.set({ x, y, color })
  }, 25)

  return (
    <div>
      <div className="fixed z-10 right-4 bottom-4 px-4 py-2 rounded-sm bg-gray-100 dark:bg-gray-700">
        <label>
          <input
            type="checkbox"
            onChange={(e) => showLiveCursorsSet(e.target.checked)}
            checked={showLiveCursors}
          />{' '}
          Live Cursors
        </label>
      </div>
      {showLiveCursors &&
        Object.entries(cursors)
          .filter(([key, _]) => key !== userID)
          .map(([userID, cursor]) => (
            <div
              key={userID}
              className="absolute left-0 top-0 select-none pointer-events-none opacity-50"
              style={{
                transition: 'transform 0.025s ease-out',
                transform: `translate3d(${cursor?.x - 4}px, ${
                  cursor?.y - 4
                }px, 0px)`,
                color: cursor?.color || 'black'
              }}
            >
              <Cursor />
            </div>
          ))}
    </div>
  )
}

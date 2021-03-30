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
  const [showSelf, setShowSelf] = useState(true)
  const [color, setColor] = useState(null)
  const [name, setName] = useState('Anonymous')

  const userID = useUserID()

  useEffect(() => {
    setColor(pickRandom(COLORS))
  }, [])

  useInterval(() => {
    cursorsClient.set({ x, y, color, name })
  }, 25)

  const onToggleCursors = (e) => {
    setShowSelf(e.target.checked)
    document.querySelector('body').classList.toggle('cursor-none')
  }

  return (
    <div>
      <div className="fixed z-10 right-4 bottom-4 space-y-2 flex flex-col p-4 dark:bg-gray-700">
        <label>
          <input
            type="checkbox"
            onChange={onToggleCursors}
            checked={showSelf}
          />{' '}
          Live Cursors
        </label>
        <label>
          <input
            type="text"
            className="px-2 py-1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
      </div>
      {Object.entries(cursors)
        .filter(([key, _]) => showSelf || key !== userID)
        .map(([userID, cursor]) => (
          <div
            key={userID}
            className="absolute left-0 top-0 select-none pointer-events-none"
            style={{
              transition: 'transform 0.025s ease-out',
              transform: `translate3d(${cursor?.x - 4}px, ${
                cursor?.y - 4
              }px, 0px)`,
              color: cursor?.color || 'black'
            }}
          >
            <Cursor />
            <div
              className="absolute z-50 overflow-auto py-0 px-1 text-white text-sm"
              style={{
                transform: 'translate3d(16px, -4px, 0px)',
                backgroundColor: cursor?.color
              }}
            >
              {cursor.name}
            </div>
          </div>
        ))}
    </div>
  )
}

import { useLayoutEffect } from 'react'
import NextImage from 'next/image'
import Colcade from 'colcade'
import A from '@comp/a'

function Photos({ data }) {
  useLayoutEffect(() => {
    const colc = new Colcade(`.photos`, {
      columns: `.photos-col`,
      items: `.photos-item`
    })

    return () => {
      colc.destroy()
    }
  }, [])

  return (
    <div className="photos flex">
      <div className="photos-col photos-col--1 w-full sm:w-1/2" />
      <div className="photos-col photos-col--2 w-1/2 hidden sm:block" />

      {data.map((item) => {
        return (
          <div key={item.id} className="photos-item p-5">
            <A href={item.links.html} blank>
              <NextImage
                src={item.urls.regular}
                alt={item.description}
                width={item.width}
                height={item.height}
                layout="responsive"
              />
            </A>
          </div>
        )
      })}
    </div>
  )
}

export default Photos

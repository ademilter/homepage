import { Bookmark } from 'types/Bookmark'
import { getYear } from 'date-fns'

const getBookmark = async (page = 0, year = getYear(new Date())) => {
  const query = [
    `https://api.raindrop.io/rest/v1/raindrops/0`,
    `?perpage=50`,
    `&page=${page}`,
    `&search=[{ "key": "tag", "val": "history"}, { "key": "created", "val": "${year}" }]`,
    `&sort=-created`,
  ].join('')

  const res = await fetch(query, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
    },
  })
  const data = await res.json()
  let bookmarks: [Bookmark] = data.items

  if (bookmarks.length > 0) {
    return bookmarks.concat(await getBookmark(page + 1, year))
  } else {
    return bookmarks
  }
}

export { getBookmark }

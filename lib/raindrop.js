const URL = [
  'https://api.raindrop.io/rest/v1/raindrops/0?',
  'perpage=50&',
  'search=[{"key":"tag","val":"history"}]'
].join('')

async function getBookmark() {
  const res = await fetch(URL, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
    })
  })
  return res.json()
}

export { getBookmark }

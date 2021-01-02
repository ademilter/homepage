const url = `https://api.raindrop.io/rest/v1/raindrops/0?search=[{"key":"tag","val":"history"}]`

async function getBookmark() {
  const res = await fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })
  return res.json()
}

export { getBookmark }

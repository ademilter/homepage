export default async (req, res) => {
  const { user, room } = req.body

  const resources = [
    {
      object: 'room',
      reference: room,
      permission: 'join'
    }
  ]

  const r = await fetch('https://super.roomservice.dev/provision', {
    method: 'post',
    headers: {
      Authorization: `Bearer: ${process.env.ROOMSERVICE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: user,
      resources: resources
    })
  })

  const json = await r.json()
  res.json(json)
}

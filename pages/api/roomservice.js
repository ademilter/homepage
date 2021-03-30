const apiKey = process.env.ROOMSERVICE_API_KEY

export default async (req, res) => {
  const body = req.body
  const user = req.body.user

  const resources = [
    {
      object: 'room',
      reference: body.room,
      permission: 'join'
    }
  ]

  if (!apiKey) {
    const error =
      "API key not set. Grab yours from https://app.roomservice.dev and add ROOMSERVICE_API_KEY=<your_api_key> to a .env file in this directory. After that, restart the `yarn dev` command. Don't worry, the .env file is ignored in the .gitignore file so your API key won't be stored on GitHub."
    res.statusCode = 500
    res.write(error)
    throw error
  }

  const r = await fetch('https://super.roomservice.dev/provision', {
    method: 'post',
    headers: {
      Authorization: `Bearer: ${apiKey}`,
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

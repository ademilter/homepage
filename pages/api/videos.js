import { Table } from '@lib/helper'

export default async function handler(req, res) {
  const table = new Table('Video')
  const data = await table.getAllData()
  res.end(JSON.stringify(data))
}

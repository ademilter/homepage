import Airtable from 'airtable'

const BASE = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)
const TABLE = BASE('Gear')

const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record))
}

const minifyRecord = (record) => {
  return {
    id: record.id,
    ...record.fields
  }
}

export default async function handler(req, res) {
  const records = await TABLE.select({}).all()
  const minifiedRecords = await getMinifiedRecords(records)
  console.log(minifiedRecords)

  res.end(JSON.stringify(minifiedRecords))
}

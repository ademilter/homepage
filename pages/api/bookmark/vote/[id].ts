import redis from "lib/redis";

export default async function handler(req, res) {
  const method = req.method;
  const { id } = req.query;

  if (method === "GET") {
    const count = await redis.get(`bookmark:${id}`);
    return res.status(200).json({ count });
  }

  if (method === "PATCH") {
    const count = await redis.incr(`bookmark:${id}`);
    return res.status(200).json({ count });
  }

  return res.status(400).json({ message: "Method not allowed" });
}

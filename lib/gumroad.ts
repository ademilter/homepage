export default async () => {
  const apiKey = process.env.GUMROAD_API_KEY;
  const productId = "xssygh";

  const response = await fetch(
    `https://api.gumroad.com/v2/products/${productId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data.product;
};

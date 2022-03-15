export default async () => {
  const response = await fetch(
    "https://api.github.com/repos/ademilter/homepage/issues?state=all&per_page=100&labels=faq",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );

  return await response.json();
};

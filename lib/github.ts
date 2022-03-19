export default async () => {
  const query = `
{
  repository(name: "homepage", owner: "ademilter") {
    discussions(last: 100) {
      edges {
        cursor
        node {
          id
          url
          bodyHTML
          answer {
            id
            createdAt
            url
            bodyHTML
          }
          author {
            ... on User {
              id
              avatarUrl(size: 100)
              name
              url
            }
          }
        }
      }
    }
  }
}`;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data } = await response.json();
  return data.repository.discussions.edges;
};

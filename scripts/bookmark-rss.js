require('dotenv').config();
const fetch = require('isomorphic-unfetch');
const RSS = require('rss');
const fs = require('fs');

const getBookmark = async () => {
  const query = [
    `https://api.raindrop.io/rest/v1/raindrops/0`,
    `?perpage=50`,
    `&search=[{"key":"tag","val":"history"}]`,
    `&sort=-created`,
  ].join('');

  const res = await fetch(query, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.items;
};

async function generate() {
  const feed = new RSS({
    title: 'Feyzli linkler',
    webMaster: 'Adem ilter',
    site_url: 'https://ademilter.com',
    feed_url: 'https://ademilter.com/feed.xml',
  });

  const bookmarks = await getBookmark();

  bookmarks.forEach(
    ({ _id: guid, link: url, title, excerpt: description, created: date }) => {
      feed.item({
        guid,
        title,
        url,
        date,
        description,
      });
    }
  );

  await fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

module.exports = generate;

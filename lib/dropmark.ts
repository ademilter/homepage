import { Dropmark } from 'types/dropmark';

const getDropmark = async () => {
  const url = 'https://adem.dropmark.com/926058.json';

  const res = await fetch(url, {
    method: 'get',
  });
  const data = await res.json();
  let items: [Dropmark] = data.items.map((o: Dropmark) => {
    const {
      id,
      name,
      type,
      description,
      collection_id,
      created_at,
      content,
      metadata,
    } = o;
    return {
      id,
      name,
      type,
      description,
      collection_id,
      created_at,
      content,
      metadata,
    };
  });
  return items;
};

export { getDropmark };

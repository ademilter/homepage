export type Faq = {
  cursor: string;
  node: {
    id: string;
    url: string;
    bodyHTML: string;
    answer: {
      id: string;
      createdAt: string;
      url: string;
      bodyHTML: string;
    };
    author: {
      id: string;
      avatarUrl: string;
      name: string;
      url: string;
    };
  };
};

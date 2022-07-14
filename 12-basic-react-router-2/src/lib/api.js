const API_URL = process.env.REACT_APP_API_URL;

export const getAllQuotes = async () => {
  const response = await fetch(`${API_URL}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Fail to fetch quotes.');
  }

  const loadedQuotes = Object.entries(data).reduce((acc, [id, item]) => {
    acc.push({ id, ...item });
    return acc;
  }, []);
  return loadedQuotes;
};

export const getSingleQuote = async (quoteId) => {
  const response = await fetch(`${API_URL}/quotes/${quoteId}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Fail to fetch quote.');
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const addQuote = async (quoteData) => {
  const response = await fetch(`${API_URL}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Fail to create quote.');
  }
};

export const addComment = async ({ quoteId, commentData }) => {
  const response = await fetch(`${API_URL}/comments/${quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Fail to add comment.');
  }
  return {
    commentId: data.name,
  };
};

export const getAllComments = async (quoteId) => {
  const response = await fetch(`${API_URL}/comments/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Fail to get comments.');
  }

  const loadedComments = Object.entries(data).reduce((acc, [id, text]) => {
    acc.push({
      id,
      text,
    });
    return acc;
  }, []);

  return loadedComments;
};

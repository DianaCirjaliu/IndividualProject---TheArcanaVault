const EXPIRATION_TIME = 24 * 60 * 60 * 1000;

function getData(userId) {
  if (!userId) return [];
  const storageKey = `userFate_${userId}`;
  const saved = localStorage.getItem(storageKey);
  if (!saved) return [];

  try {
    const parsedData = JSON.parse(saved);

    if (Date.now() - parsedData.timestamp > EXPIRATION_TIME) {
      localStorage.removeItem(storageKey);
      return [];
    }

    return parsedData.cards || [];
  } catch {
    localStorage.removeItem(storageKey);
    return [];
  }
}

export default getData;

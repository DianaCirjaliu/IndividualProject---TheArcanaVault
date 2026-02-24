const EXPIRATION_TIME = 24 * 60 * 60 * 1000;

function getData() {
  const saved = localStorage.getItem("userFate");
  if (!saved) return [];

  try {
    const parsedData = JSON.parse(saved);

    if (Date.now() - parsedData.timestamp > EXPIRATION_TIME) {
      localStorage.removeItem("userFate");
      return [];
    }

    return parsedData.cards || [];
  } catch {
    localStorage.removeItem("userFate");
    return [];
  }
}

export default getData;

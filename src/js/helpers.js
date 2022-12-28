export function saveToLS(key, value) {
  const jsonFormat = JSON.stringify(value);
  localStorage.setItem(key, jsonFormat);
}

export function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

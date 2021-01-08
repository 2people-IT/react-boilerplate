// Helpers for interacting with localStorage to store authToken
const TOKEN = 'X-AuthToken';

const setToken = (value) => localStorage.setItem(TOKEN, value);
const getToken = (): string => localStorage.getItem(TOKEN);
const removeToken = () => localStorage.removeItem(TOKEN);

export { setToken, getToken, removeToken };

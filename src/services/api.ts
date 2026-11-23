const BASE_URL = 'https://dummyjson.com';

export const api = {
  // 1. Жүйеге кіру (Login)
  login: async (username: string, password: string) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Логин немесе құпиясөз қате');
    return data;
  },

  // 2. Чат пайдаланушыларын алу (Chats)
  getUsers: async () => {
    const response = await fetch(`${BASE_URL}/users?limit=20`);
    const data = await response.json();
    return data.users;
  },

  // 3. Тауарларды іздеу және алу (Search & Filter)
  searchProducts: async (query: string) => {
    const url = query.trim()
      ? `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`
      : `${BASE_URL}/products?limit=10`;
    const response = await fetch(url);
    const data = await response.json();
    return data.products;
  },
};
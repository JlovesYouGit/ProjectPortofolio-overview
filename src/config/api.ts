const isProd = typeof window !== 'undefined' && process.env.NODE_ENV === 'production';
const API_BASE_URL = isProd ? window.location.origin : 'http://localhost:3000';

export const apiClient = {
  async get(endpoint: string, init?: RequestInit) {
    const res = await fetch(`${API_BASE_URL}/api${endpoint}`, { ...init, method: 'GET' });
    if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.status}`);
    return res.json();
  },
  async post<T = unknown>(endpoint: string, data: unknown, init?: RequestInit) {
    const res = await fetch(`${API_BASE_URL}/api${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
      body: JSON.stringify(data),
      ...init,
    });
    if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
    return res.json() as Promise<T>;
  },
};

export default apiClient;

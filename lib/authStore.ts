let token: string | null = null;

export const authStore = {
  getToken() {
    return token;
  },
  setToken(next: string | null) {
    token = next;
  },
};
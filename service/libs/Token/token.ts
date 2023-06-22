interface Storage {
  getToken(key: string): string | null;
  setToken(key: string, value: string): void;
  removeToken(key: string): void;
  clearToken(): void;
}

class Token implements Storage {
  public getToken(key: string): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  }

  public setToken(key: string, value: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  }

  public removeToken(key: string): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  public clearToken(): void {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }
}

export default new Token();

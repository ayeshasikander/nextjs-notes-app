// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';

interface User {
  username: string;
  password: string;
}

export const useAuth = () => {
  // Explicitly typing `user` to accept either `User` or `null`
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for user authentication status (could fetch from an API or localStorage)
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const login = (userData: User) => {
    // Handle login logic (e.g., send data to an API)
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return { user, login, logout };
};

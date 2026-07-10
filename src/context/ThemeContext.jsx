import { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Force dark mode only. Keep a no-op toggle to avoid breaking callers.
  useEffect(() => {
    const rootEl = document.documentElement;
    const body = document.body;
    rootEl.classList.add('dark');
    body.classList.add('dark');
  }, []);

  const isDark = true;
  const toggleTheme = () => {
    // intentionally no-op: light theme removed
    return;
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

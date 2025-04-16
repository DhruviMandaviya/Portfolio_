import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const [mode, setMode] = useState('');

  useEffect(() => {
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const storedTheme = window.localStorage.getItem('theme');

    const determineTheme = () => {
      const userPref = storedTheme;
      const systemPref = mediaQuery.matches ? 'dark' : 'light';
      const theme = userPref || systemPref;

      setMode(theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    };

    determineTheme();

    const listener = () => {
      if (!storedTheme) {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        setMode(systemTheme);
        document.documentElement.classList.toggle('dark', systemTheme === 'dark');
      }
    };

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;

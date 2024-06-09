import React, { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from 'next-themes';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === 'light' ? (
        <button
          className="flex items-center justify-center mr-3"
          onClick={() => {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
          }}
        >
          <HiMoon className="text-2xl cursor-pointer text-slate-800" />
        </button>
      ) : (
        <button
          className="flex items-center justify-center mr-3"
          onClick={() => setTheme('light')}
        >
          <HiSun className="text-2xl cursor-pointer text-yellow-400" />
        </button>
      )}
    </div>
  );
};

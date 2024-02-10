import React, { useState, useEffect } from 'react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
    onClick={toggleDarkMode}
    className={`px-4 py-2 rounded-full ${
      darkMode ? 'bg-yellow-400' : 'bg-gray-800'
    } ${
      darkMode ? 'text-gray-900' : 'text-white'
    } transition-colors duration-200`}
  >
    {darkMode ? <XMarkIcon className="h-6 w-6 fill-blue-500" aria-hidden="true" /> : <ChartPieIcon className="h-6 w-6 fill-blue-500" aria-hidden="true" />}
  </button>
  );
};

export default ThemeSwitcher;
'use client';

import { useEffect } from 'react';

export function ScrollbarFix() {
  useEffect(() => {
    const originalStyle = document.documentElement.style.scrollbarGutter;
    document.documentElement.style.scrollbarGutter = 'stable';
    return () => {
      document.documentElement.style.scrollbarGutter = originalStyle;
    };
  }, []);

  return null;
}
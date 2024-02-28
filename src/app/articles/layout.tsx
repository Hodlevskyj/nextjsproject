"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LayoutArticles = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto py-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li className={pathname === '/articles' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles">Articles</Link>
          </li>
          <li className={pathname === '/articles/favorite' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles/favorite">Articles Favorite</Link>
          </li>
          <li className={pathname === '/articles/create' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles/create">Articles Create</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LayoutArticles;



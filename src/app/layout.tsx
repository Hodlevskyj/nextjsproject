import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


// "use client"
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const LayoutAll = () => {
//   const pathname = usePathname();

//   return (
//     <div className="container mx-auto py-4">
//       <nav className="mb-4">
//         <ul className="flex space-x-4">
//           <li className={pathname === '/articles' ? 'font-bold text-blue-500' : ''}>
//             <Link href="/articles">Articles</Link>
//           </li>
//           <li className={pathname === '/profile/settings' ? 'font-bold text-blue-500' : ''}>
//             <Link href="/profile/settings">Profile Settings</Link>
//           </li>
//           <li className={pathname === '/profile/security' ? 'font-bold text-blue-500' : ''}>
//             <Link href="/profile/security">Profile Security</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default LayoutAll;

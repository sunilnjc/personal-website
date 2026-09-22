import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({variable:'--font-geist-sans',subsets:['latin']});
const geistMono = Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata: Metadata = {
  title: 'Sunilkumar Kalabandi | Software Engineer',
  description: 'Banking systems, applied AI and deployed products. Explore Sunilkumar Kalabandi’s engineering experience, project case studies and resumes.',
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Sunilkumar Kalabandi | Software Engineer', description: 'Banking systems, applied AI and deployed products.', type: 'website' },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}

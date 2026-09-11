import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans = Geist({variable:'--font-geist-sans',subsets:['latin']});
const geistMono = Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata: Metadata = {
  title: 'Sunil — Projects, Ideas & Discoveries',
  description: 'A personal collection of projects, milestones, and notes by Sunil. Explore experiments in computer vision, systems, and the ideas behind them.',
  icons: { icon: '/favicon.svg' },
  openGraph: { title: 'Sunil — Projects, Ideas & Discoveries', description: 'My work, ideas, and everything I discover along the way.', type: 'website' },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}

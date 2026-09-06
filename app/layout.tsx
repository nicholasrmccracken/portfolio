import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Nicholas McCracken | Software Engineer',
  description: 'Software engineering portfolio of Nicholas McCracken, focused on AI/ML, data engineering, and intelligent systems.',
  openGraph: { title: 'Nicholas McCracken | Software Engineer', description: 'Software engineering portfolio of Nicholas McCracken, focused on AI/ML, data engineering, and intelligent systems.', type: 'website', locale: 'en_US', siteName: 'Nicholas McCracken' },
  twitter: { card: 'summary', title: 'Nicholas McCracken | Software Engineer', description: 'AI/ML, data engineering, and intelligent systems.' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

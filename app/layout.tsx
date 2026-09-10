import type { Metadata } from 'next';
import './globals.css';
import { profile, siteMetadata } from '@/lib/portfolio';
export const metadata: Metadata = {
  ...siteMetadata,
  metadataBase: new URL(profile.portfolio),
  openGraph: { ...siteMetadata, url: profile.portfolio, type: 'website', locale: 'en_US', siteName: profile.name },
  twitter: { ...siteMetadata, card: 'summary' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

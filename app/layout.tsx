import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'YASH22 / AI Inference Lab',
  description: 'A live exploration of the systems behind AI inference.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

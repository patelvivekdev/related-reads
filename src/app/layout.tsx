import type { Metadata } from 'next';
import localFont from 'next/font/local';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import './globals.css';
import Sidebar from '@/components/sidebar/Sidebar';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Related Reads | patelvivek.dev',
  description: 'A project that showcases related reads using AI algorithms',
  authors: [{ name: 'Vivek Patel', url: 'https://patelvivek.dev' }],
  keywords: [
    'Next.js',
    'AI',
    'Tailwind CSS',
    'Vercel AI SDK',
    'Mixedbread',
    'patelvivekdev',
    'turso-vector-search',
    'drizzle-orm',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <Sidebar />
          <SidebarInset>
            <header className="flex h-14 shrink-0 items-center gap-2">
              <div className="flex flex-1 items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Link href="/" className="text-xl font-bold">
                  Blogs
                </Link>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 px-4 py-6">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

import Loading from '@/components/Loading/Loading';
import '@/styles/globals.scss';
import { Suspense } from 'react';
import manrope from "@/app/fonts";
import Layout from "@/components/Layout/Layout";

export const metadata = {
  title: 'Movie Finder',
  description: 'An Application to Search for Movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Suspense fallback={<Loading loadingText={"Loading..."}/>}>
          <Layout>{children}</Layout>
        </Suspense>
      </body>
    </html>
  )
}


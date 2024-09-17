import Header from '@/components/Header/Header';
import Loading from '@/components/Loading/Loading';
import '@/styles/globals.scss';
import { Suspense } from 'react';

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
    <html lang="en">
      <body>
        <Suspense fallback={<Loading loadingText={"Loading..."}/>}>
          <Header></Header>
          <main>
              {children}
          </main>
        </Suspense>
      </body>
    </html>
  )
}


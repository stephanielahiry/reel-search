import Header from '@/components/Header/Header';
import '@/styles/globals.scss';

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
        <Header></Header>
        <main>
            {children}
        </main>
      </body>
    </html>
  )
}


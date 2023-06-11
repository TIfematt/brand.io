import '@styles/globals.css'
import Nav from '@components/Nav'

export const metadata = {
  title: 'Brand Rep',
  description: 'Developed by Tife',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className='nav'>
          <Nav />
        </nav>
        <main className='app'>
          {children}
        </main>

      </body>
    </html>
  )
}

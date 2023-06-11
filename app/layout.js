import '@styles/globals.css'
// import Nav from '@components/Nav'
// import Loader from '@components/Loader';

export const metadata = {
  title: 'Brand Rep',
  description: 'Developed by Tife',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          {children}
        </main>

      </body>
    </html>
  )
}

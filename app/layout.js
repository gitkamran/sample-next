import './globals.css'

export const metadata = {
  title: 'برنامه آماده Next',
  description: 'برنامه آماده به کار برای Next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir='rtl'>
      <body>
        {children}
      </body>
    </html>
  )
}

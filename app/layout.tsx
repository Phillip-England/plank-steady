import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className=''>
        <div className=''>
          <h1 className='text-xl p-4 border-b font-serif'>CFA Tools</h1>
        </div>
        {children}
      </body>
    </html>
  )
}

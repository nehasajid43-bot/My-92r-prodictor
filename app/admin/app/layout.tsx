import './globals.css'

export const metadata = {
  title: '92R Predictor',
  description: 'Admin approval required',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}

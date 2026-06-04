export const metadata = {
  title: '92r Predictor',
  description: 'My 92r Predictor App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

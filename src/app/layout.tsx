import NavbarComponent from "src/core/layouts/public/components/navbar/navbar.component"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          <NavbarComponent/>
          {children}</body>
    </html>
  )
}

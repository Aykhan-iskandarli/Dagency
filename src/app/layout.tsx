"use client";
import Footer from "src/core/layouts/public/components/footer/footer.component"
import HeaderComponent from "src/core/layouts/public/components/navbar/header.component"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
        <body>
          <HeaderComponent/>
          <div className="main-content">
          {children}
          </div>
          <Footer/>
          </body>
    </html>
  )
}

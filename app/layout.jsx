import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: "Discover and share AI Prompts"
}
function RootLayout({children}) {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
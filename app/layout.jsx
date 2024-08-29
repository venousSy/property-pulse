import '@/assets/styles/globals.css'
export const metadata = {
  title: 'property pulse',
  keywords: 'rental',
  description: 'find perfect rental',
}
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main> {children} </main>
      </body>
    </html>
  )
}

export default MainLayout

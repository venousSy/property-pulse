import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
export const metadata = {
  title: 'property pulse',
  keywords: 'rental',
  description: 'find perfect rental',
}
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main> {children} </main>
      </body>
    </html>
  )
}

export default MainLayout

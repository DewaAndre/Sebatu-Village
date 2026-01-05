import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* MOBILE: navbar di atas */}
      {/* DESKTOP: sidebar */}
      <div className="flex flex-col md:flex-row flex-1">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}



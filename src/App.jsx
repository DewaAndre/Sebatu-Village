import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Media from "./pages/Media"
import Wisata from "./pages/Wisata"
import WisataDetail from "./pages/WisataDetail"
import Hubungi from "./pages/Hubungi"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/wisata/:slug" element={<WisataDetail />} />
        <Route path="/hubungi" element={<Hubungi />} />
      </Routes>
    </BrowserRouter>
  )
}

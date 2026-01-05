import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#2b1f0d] pt-20 pb-10 text-gray-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* LEFT : LOGO & ADDRESS */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/img/logo1.png"
                alt="Desa Wisata Sebatu"
                className="h-12 w-auto"
              />
            </div>

            <p className="leading-relaxed text-white">
              Desa Sebatu,<br />
              Kecamatan Tegallalang,<br />
              Kabupaten Gianyar.
            </p>
          </div>

          {/* CENTER : MENU */}
          <div className="md:mx-auto">
            <h3 className="font-semibold text-white mb-5">
              Tentang Kami
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/wisata"
                  className="text-white hover:text-gray-400 transition"
                >
                  Wisata
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  className="text-white hover:text-gray-400 transition"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  to="/hubungi"
                  className="text-white hover:text-gray-400 transition"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT : SOCIAL MEDIA */}
          <div className="md:ml-auto">
            <h3 className="font-semibold text-white mb-5">
              Sosial Media
            </h3>

            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-blue-600 text-2xl hover:scale-110 transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="text-pink-500 text-2xl hover:scale-110 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="text-red-600 text-2xl hover:scale-110 transition"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-400 border-t pt-6">
          Copyright © 2025 | Developed by{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
          >
            INSTIKI
          </a>
        </div>
      </div>
    </footer>
  )
}

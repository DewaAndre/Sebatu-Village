import { Link } from "react-router-dom"

export default function Galeri() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Galeri Wisata <br /> Desa Sebatu
          </h2>
          <p className="mt-4 text-gray-500">
            Jelajahi koleksi foto-foto menakjubkan dari berbagai destinasi wisata desa Sebatu
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <img
              src="/img/kawi2.jpg"
              alt="Pura Gunung Kawi 2"
              className="w-full h-[260px] object-cover rounded-3xl"
            />

            <img
              src="/img/pesiraman1.jpg"
              alt="Pesiraman Sebatu"
              className="w-full h-[260px] object-cover rounded-3xl"
            />
          </div>

          {/* CENTER COLUMN */}
          <div>
            <img
              src="/img/kawi1.jpg"
              alt="Pura Gunung Kawi"
              className="w-full h-[550px] object-cover rounded-3xl"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <img
              src="/img/alam2.jpg"
              alt="Alam Bali 2"
              className="w-full h-[260px] object-cover rounded-3xl"
            />

            <img
              src="/img/alam3.jpg"
              alt="Alam Bali 3"
              className="w-full h-[260px] object-cover rounded-3xl"
            />
          </div>

        </div>

        {/* LINK SELENGKAPNYA */}
        <div className="mt-8">
          <Link
            to="/media"
            className="inline-flex items-center text-gray-400 hover:text-gray-700 transition font-medium"
          >
            Selengkapnya
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

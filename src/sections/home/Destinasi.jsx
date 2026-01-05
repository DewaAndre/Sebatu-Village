import { Link } from "react-router-dom"

export default function Destinasi() {
  return (
    <section className="bg-[#f3fbf7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Destinasi Wisata <br /> Desa Sebatu
          </h2>
          <p className="mt-3 text-gray-500">
            Pilihan destinasi wisata terbaik di desa sebatu dan nikmati pengalaman yang tak terlupakan
          </p>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="/img/kawi1.jpg"
              alt="Pura Gunung Kawi"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold">Pura Gunung Kawi</h3>
              <p className="text-sm mt-1">
                Pura Gunung Kawi Sebatu, terletak di Kabupaten Gianyar...
              </p>
              <Link
                to="/kawi"
                className="inline-block mt-4 px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                Selengkapnya
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="/img/pesiraman3.jpg"
              alt="Pesiraman Dalem Pingit Sebatu"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold">
                Pesiraman Dalem Pingit Sebatu
              </h3>
              <p className="text-sm mt-1">
                Mata air ini diyakini memiliki kekuatan penyembuhan dan...
              </p>
              <Link
                to="/pesiraman"
                className="inline-block mt-4 px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                Selengkapnya
              </Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="/img/alam3.jpg"
              alt="Alam Bali Agrowisata"
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold">
                Alam Bali Agrowisata
              </h3>
              <p className="text-sm mt-1">
                Agrowisata ini menyuguhkan berbagai macam kopi khas Bali dan luwak...
              </p>
              <Link
                to="/alam"
                className="inline-block mt-4 px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                Selengkapnya
              </Link>
            </div>
          </div>

        </div>

        {/* SHOW MORE BUTTON */}
        <div className="mt-12 text-center">
          <Link
            to="/wisata"
            className="inline-flex items-center px-8 py-3 bg-[#543A14] text-white font-semibold rounded-full hover:bg-[#2b1f0d] transition"
          >
            Show More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

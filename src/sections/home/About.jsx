export default function About() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Background ornamen samar */}
      <div className="absolute inset-0 opacity-5 bg-gray-200"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-orange-400 font-semibold mb-2">
              Tentang Kami
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-black">Desa </span>
              <span className="text-green-600">Wisata</span>
              <br />
              <span className="text-black">Sebatu.</span>
            </h1>

            <p className="text-gray-500 max-w-lg leading-relaxed mb-10">
              Desa Sebatu terletak di ujung utara Kabupaten Gianyar, Bali.
              Desa ini merupakan salah satu destinasi wisata tersembunyi di Bali
              yang menawarkan ketenangan dan pesona alam yang menakjubkan.
            </p>

            <a
              href="#"
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
            </a>
          </div>

          {/* RIGHT CONTENT (VIDEO) */}
          <div className="w-full">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gxvtyxfclHQ"
                title="Profil Desa Sebatu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

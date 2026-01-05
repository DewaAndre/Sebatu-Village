import { Link } from "react-router-dom"
import Layout from "../layouts/Layout"

export default function Wisata() {
  const wisata = [
    {
      title: "Jasan Waterfall",
      desc: "Air terjun tersembunyi yang menawarkan keindahan alam asri dan suasana tenang.",
      img: "jasan1.jpg",
      slug: "jasan",
      highlight: false,
    },
    {
      title: "Pura Gunung Kawi Sebatu",
      desc: "Situs suci dan bersejarah dengan candi tebing yang menenangkan jiwa.",
      img: "kawi1.jpg",
      slug: "kawi",
      highlight: true,
    },
    {
      title: "Pesiraman Dalem Pingit Sebatu",
      desc: "Mata air suci untuk ritual penyucian diri yang sarat makna spiritual.",
      img: "pesiraman1.jpg",
      slug: "pesiraman",
      highlight: false,
    },
    {
      title: "Alam Bali Agrowisata",
      desc: "Pengalaman agrowisata khas Bali dengan kebun kopi dan kopi luwak.",
      img: "alam1.jpg",
      slug: "alam",
      highlight: false,
    },
  ]

  return (
    <Layout>

      {/* HEADER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-black">
              Destinasi Wisata <br /> Desa Sebatu
            </h1>

            <div className="mt-4 flex justify-center">
              <span className="px-6 py-2 rounded-full bg-gray-100 text-gray-500 text-sm">
                Berbagai Wisata Yang Dapat Anda Kunjungi
              </span>
            </div>
          </div>

          {/* CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {wisata.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden transition
                  ${item.highlight ? "shadow-xl scale-105" : "shadow-lg"}`}
              >

                {/* IMAGE */}
                <img
                  src={`/img/${item.img}`}
                  alt={item.title}
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  <Link
                    to={`/wisata/${item.slug}`}
                    className="inline-flex items-center px-5 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
                  >
                    Selengkapnya
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </Layout>
  )
}

import { useEffect } from "react"
import Layout from "../layouts/Layout"

export default function Media() {
  const galleries = [
    {
      left: ["kawi1.jpg", "pesiraman1.jpg"],
      center: "kawi2.jpg",
      right: ["kawi3.jpg", "alam1.jpg"],
      anim: "fade-left",
    },
    {
      left: ["alam2.jpg", "alam3.jpg"],
      center: "pesiraman1.jpg",
      right: ["pesiraman2.jpg", "pesiraman3.jpg"],
      anim: "fade-up",
    },
    {
      left: ["jasan1.jpg", "jasan2.jpg"],
      center: "jasan3.jpg",
      right: ["alam2.jpg", "pesiraman3.jpg"],
      anim: "fade-right",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll(".animate").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Layout>
      <section className="bg-white py-20 fade-up animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="max-w-2xl mb-12 fade-left animate stagger">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Galeri Wisata <br /> Desa Sebatu
            </h2>
            <p className="mt-4 text-gray-500">
              Jelajahi koleksi foto-foto menakjubkan dari berbagai destinasi wisata desa Sebatu
            </p>
          </div>

          {/* GALLERY */}
          {galleries.map((gallery, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ${gallery.anim} animate`}
            >
              {/* LEFT */}
              <div className="space-y-6">
                {gallery.left.map((img, i) => (
                  <img
                    key={i}
                    src={`/img/${img}`}
                    alt=""
                    className="w-full h-[260px] object-cover rounded-3xl fade-up animate"
                  />
                ))}
              </div>

              {/* CENTER */}
              <div>
                <img
                  src={`/img/${gallery.center}`}
                  alt=""
                  className="w-full h-[550px] object-cover rounded-3xl fade-up animate"
                />
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                {gallery.right.map((img, i) => (
                  <img
                    key={i}
                    src={`/img/${img}`}
                    alt=""
                    className="w-full h-[260px] object-cover rounded-3xl fade-up animate"
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </Layout>
  )
}

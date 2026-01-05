import { useEffect, useState } from "react"
import Layout from "../layouts/Layout"
import Footer from "../components/Footer"

export default function Hubungi() {
  const [form, setForm] = useState({
    nama_depan: "",
    nama_belakang: "",
    email: "",
    subjek: "",
    pesan: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 🔔 nanti bisa kirim ke API / Email
    console.log(form)
    alert("Pesan berhasil dikirim (dummy)")
  }

  // Animasi scroll
  useEffect(() => {
    // stagger text
    setTimeout(() => {
      document.querySelectorAll(".stagger").forEach(el => {
        el.classList.add("show")
      })
    }, 300)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll(".animate").forEach(el => observer.observe(el))
  }, [])

  return (
    <Layout>
      {/* TITLE */}
      <section className="py-20 text-center">
        <div className="stagger">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ada Pertanyaan?
          </h1>
          <span className="block text-green-600 mt-2 text-4xl md:text-5xl font-extrabold">
            Hubungi Kami!
          </span>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 mb-20 fade-up animate">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[450px]"
            src="https://www.google.com/maps?q=Sebatu,Tegallalang,Gianyar,Bali&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-5xl mx-auto px-6 pb-24 fade-up animate">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Pertanyaan Atau Saran
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger animate">
              <div>
                <label className="font-semibold">
                  Nama Depan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nama_depan"
                  value={form.nama_depan}
                  onChange={handleChange}
                  placeholder="Masukan nama depan"
                  className="w-full mt-2 p-4 rounded-xl bg-green-50 border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">
                  Nama Belakang <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nama_belakang"
                  value={form.nama_belakang}
                  onChange={handleChange}
                  placeholder="Masukan nama belakang"
                  className="w-full mt-2 p-4 rounded-xl bg-green-50 border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger animate">
              <div>
                <label className="font-semibold">
                  Alamat Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Masukan email"
                  className="w-full mt-2 p-4 rounded-xl bg-green-50 border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">
                  Subjek <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subjek"
                  value={form.subjek}
                  onChange={handleChange}
                  placeholder="Masukan subjek"
                  className="w-full mt-2 p-4 rounded-xl bg-green-50 border focus:ring-2 focus:ring-green-500 outline-none"
                  required
                />
              </div>
            </div>

            <div className="fade-up animate">
              <label className="font-semibold">
                Pertanyaan / Saran <span className="text-red-500">*</span>
              </label>
              <textarea
                name="pesan"
                rows="6"
                value={form.pesan}
                onChange={handleChange}
                placeholder="Masukan pertanyaan/saran"
                className="w-full mt-2 p-4 rounded-xl bg-green-50 border focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>

            <div className="fade-up animate">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-xl transition"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </section>

    </Layout>
  )
}

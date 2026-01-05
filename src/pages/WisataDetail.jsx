import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { wisataDetail } from "../data/wisatadetail";

export default function DetailWisata() {
  const { slug } = useParams();
  const data = wisataDetail[slug];

  // Jika slug tidak ada
  if (!data) {
    return (
      <Layout>
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-600">
            Wisata tidak ditemukan
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <div className="relative h-screen overflow-hidden">
        {data.slides.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              i === 0 ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(/img/${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col justify-center text-white px-6 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            {data.title}
          </h1>
          <p className="mt-3 max-w-xl font-semibold">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      {data.sections.map((section, index) => {
        const reverse = index % 2 !== 0;

        return (
          <section
            key={index}
            className={`py-20 ${
              reverse ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              {/* IMAGE LEFT */}
              {reverse && (
                <img
                  src={`/img/${section.img}`}
                  className="w-full h-[380px] object-cover rounded-3xl shadow-lg"
                  alt=""
                />
              )}

              {/* TEXT */}
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.desc}
                </p>
              </div>

              {/* IMAGE RIGHT */}
              {!reverse && (
                <img
                  src={`/img/${section.img}`}
                  className="w-full h-[380px] object-cover rounded-3xl shadow-lg"
                  alt=""
                />
              )}
            </div>
          </section>
        );
      })}
    </Layout>
  );
}

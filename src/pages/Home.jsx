import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

// Sections
import About from "../sections/home/About";
import Profile from "../sections/home/Profile";
import Destinasi from "../sections/home/Destinasi";
import Galeri from "../sections/home/Galeri";

export default function Home() {
  const slides = ["/img/home1.jpg", "/img/home2.jpg", "/img/home3.jpg"];

  const [current, setCurrent] = useState(0);

  // ===== HERO STAGGER + CAROUSEL =====
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ===== SECTION ANIMATION =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* ================= HERO CAROUSEL ================= */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-20 text-white">
          <div className="max-w-xl space-y-2">
            <p className="text-sm sm:text-lg font-bold">Sistem Informasi</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Desa Sebatu
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-bold">
              Kecamatan Tegallalang, Kabupaten Gianyar
            </p>
            <Link className="inline-block mt-4 px-6 py-2 bg-[#543A14] rounded-xl">
              Explorasi Wisata
            </Link>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 fade-up animate">
          <About />
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section id="profile" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 fade-left animate">
          <Profile />
        </div>
      </section>

      {/* ================= DESTINASI ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 fade-right animate">
          <Destinasi />
        </div>
      </section>

      {/* ================= GALERI ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 fade-up animate">
          <Galeri />
        </div>
      </section>
    </Layout>
  );
}

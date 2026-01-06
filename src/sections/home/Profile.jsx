export default function Profile() {
  const profiles = [
    {
      name: "I Wayan Tangsi Asrama",
      role: "Prebekel Sebatu",
      image: "/img/profile/prebekel.jpeg",
    },
    {
      name: "Ni Made Libur",
      role: "Kasi Pelayanan Desa Sebatu",
      image: "/img/profile/limbur.jpeg",
    },
    {
      name: "Ni Wayan Garsi",
      role: "Kaur Keuangan Desa Sebatu",
      image: "/img//profile/grasi.jpeg",
    },
    {
      name: "Ni Putu Erlangganingsih",
      role: "Staf Tu Umum Desa Sebatu",
      image: "/img/profile/ningsih.jpeg",
    },
    {
      name: "I Wayan Gede Hendra Guna Wijaya",
      role: "Staf Pelayanan Desa Sebatu",
      image: "/img/profile/hendra.jpeg",
    },
    {
      name: "I Komang Junaedi",
      role: "Staf Kesra Desa Sebatu",
      image: "/img/profile/junaedi.jpeg",
    },
    {
      name: "Ni Ketut Sudiani",
      role: "Kasi Pemerintahan Desa Sebatu",
      image: "/img/profile/sudiani.jpeg",
    },
    {
      name: "Ni Wayan Sulastri",
      role: "Cleaning Service Kantor Desa Sebatu",
      image: "/img/profile/sulastri.jpeg",
    },
    {
      name: "I Wayan Adi Suka Arsana",
      role: "Staf Pemerintahan Desa Sebatu",
      image: "/img/profile/arsana.jpeg",
    },
    {
      name: "I Made Adi Kartama",
      role: "Kaur Tu Umum Desa Sebatu",
      image: "/img/profile/kartana.jpeg",
    },
    {
      name: "Ni Made Sari Armini",
      role: "Kasi Sersa Desa Sebatu",
      image: "/img/profile/armini.jpeg",
    },
    {
      name: "Kadek Dwi Juli Lestari",
      role: "Kaur Perencanaan Desa Sebatu",
      image: "/img/profile/lestari.jpeg",
    },
    {
      name: "I Putu Widyawangsa Putra",
      role: "Staf Perencanaan Desa Sebatu",
      image: "/img/profile/putra.jpeg",
    },
    {
      name: "Ni Nyoman Sri Wardani",
      role: "Staf",
      image: "/img/profile/wardani.jpeg",
    },
    {
      name: "I Putu Mahendra",
      role: "Staf Tu Desa Sebatu",
      image: "/img/profile/mahendra.jpeg",
    },
    {
      name: "I Wayan Ngurah",
      role: "KBD Pujung Kelod",
      image: "/img/profile/ngurah.jpeg",
    },
    {
      name: "I Gede Bawa Sujana",
      role: "Sekretaris Desa Sebatu",
      image: "/img/profile/sujana.jpeg",
    },
    {
      name: "Putu Adi Ekawati",
      role: "Staf",
      image: "/img/profile/ekawati.jpeg",
    },
    {
      name: "I Wayan Sudarta",
      role: "KBD Pujung Kangin",
      image: "/img/profile/sudarta.jpeg",
    },
    {
      name: "I Wayan Suparta",
      role: "KBD Tumbakasa",
      image: "/img/profile/suparta.jpeg",
    },
    {
      name: "I Putu Sudartha",
      role: "KBD Tegal Suci",
      image: "/img/profile/sudarta.jpeg",
    },
    {
      name: "I Wayan Gede sanjaya",
      role: "KBD Sebatu",
      image: "/img/profile/sanjaya.jpeg",
    },
    {
      name: "I Made Hendra Parwata",
      role: "KBD Jasan",
      image: "/img/profile/parwate.jpeg",
    },
    {
      name: "I Kadek Tenaya",
      role: "KBD Tenjaka",
      image: "/img/profile/tenaya.jpeg",
    },
    {
      name: "I Komang Rudana",
      role: "KBD Jati",
      image: "/img/profile/rudana.jpeg",
    },
    {
      name: "Ni Wayan Windayani",
      role: "Cleaning Service Kantor Desa Sebatu",
      image: "/img/profile/windayani.jpeg",
    },
  ];

  return (
    <div id="profile" className="bg-gray-300 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">PROFILE DESA</h2>

      {/* ================= GRID ================= */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              {/* FOTO */}
              <div className="h-[220px] w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="bg-white p-4 text-center">
                <h3 className="font-semibold text-sm text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

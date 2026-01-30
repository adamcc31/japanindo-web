import Image from "next/image";

type FeatureSectionProps = {
  variant?: "prePricing" | "postPricing";
};

export default function FeatureSection({ variant = "prePricing" }: FeatureSectionProps) {
  if (variant === "prePricing") {
    return (
      <>
        <section className="py-12 bg-white dark:bg-background-dark">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition shadow-sm">
                  <span className="material-icons-round text-3xl">call</span>
                </div>
                <span className="font-bold text-gray-800 dark:text-white group-hover:text-primary transition">
                  CALL SIM
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                  <span className="material-icons-round text-3xl">wifi</span>
                </div>
                <span className="font-bold text-primary border-b-2 border-primary pb-1">
                  DATA SIM
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition shadow-sm">
                  <span className="material-icons-round text-3xl">
                    flight_takeoff
                  </span>
                </div>
                <span className="font-bold text-gray-800 dark:text-white group-hover:text-primary transition">
                  PREPAID SIM
                </span>
              </div>
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition shadow-sm">
                  <span className="material-icons-round text-3xl">
                    local_offer
                  </span>
                </div>
                <span className="font-bold text-gray-800 dark:text-white group-hover:text-primary transition">
                  Promo
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-snug">
                Berawal Dari Curhat, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Hadir Sebagai Solusi</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Japanindo Travel berdiri dari pengalaman nyata para kenshusei Indonesia di Jepang yang kesulitan mendapatkan akses internet saat pertama kali tiba.
                <br /><br />
                Riset kami menunjukkan bahwa <strong>80% kenshusei membutuhkan nomor telepon Jepang sesegera mungkin</strong>. Kami berkomitmen memberikan edukasi dan layanan komunikasi terbaik bagi siswa/i.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-pink-600">
                    check_box
                  </span>
                  <span className="text-sm font-medium dark:text-gray-300">
                    Jaringan NTT DOCOMO
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-pink-600">
                    check_box
                  </span>
                  <span className="text-sm font-medium dark:text-gray-300">
                    Support HP Indonesia
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-pink-600">
                    check_box
                  </span>
                  <span className="text-sm font-medium dark:text-gray-300">
                    CS Bahasa Indonesia
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons-round text-pink-600">
                    check_box
                  </span>
                  <span className="text-sm font-medium dark:text-gray-300">
                    Bisa Registrasi Bank
                  </span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-pink-600 to-purple-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-purple-500/30 transition hover:scale-105">
                Tentang Kami
              </button>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-blue-100 dark:bg-gray-800 rounded-tr-[5rem] rounded-bl-[5rem] transform rotate-3 scale-95 z-0" />
              <div className="relative z-10 w-full rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-2xl h-[450px]">
                <Image
                  alt="Tentang Japanindo"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src="/assets/kenshu_1.webp"
                />
              </div>

              <div className="absolute bottom-10 -right-4 z-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">80%</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">Kenshusei Butuh Internet Segera</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section id="features" className="bg-white dark:bg-background-dark overflow-hidden py-20">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-12 md:p-20 flex flex-col justify-center text-white relative">
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6">
                Alasan Memilih <br /> JP Smart Sim <br />by Japanindo Travel
              </h2>
              <p className="text-white/80 mb-10">
                Kami memahami kebutuhan kenshusei karena kami belajar dari pengalaman Anda.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round text-white">signal_cellular_alt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sinyal Kuat</h4>
                    <p className="text-sm text-white/70">Menggunakan jaringan NTT DOCOMO yang luas dan stabil.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round text-white">smartphone</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hemat Biaya</h4>
                    <p className="text-sm text-white/70">Mendukung HP dari Indonesia, tidak perlu beli perangkat baru.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round text-white">storefront</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Pembayaran Mudah dan Praktis</h4>
                    <p className="text-sm text-white/70">Pembayaran bulanan mudah melalui Konbini (minimarket).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round text-white">account_balance</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Registrasi Bank Jepang</h4>
                    <p className="text-sm text-white/70">Mendukung pendaftaran rekening bank Jepang.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] md:h-auto min-h-[500px]">
            <Image
              alt="Kenshusei di Jepang"
              className="absolute inset-0 w-full h-full object-cover"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src="/assets/alasan.png"
            />
          </div>
        </div>
      </section>

      <section className="h-80 relative flex items-center justify-center">
        <Image
          alt="Japan Scenery"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          fill
          sizes="100vw"
          src="/assets/cta.webp"
        />
        <div className="text-center relative z-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Terhubung di Jepang?</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">Pesan kartu SIM Anda sekarang dan nikmati koneksi internet sejak pendaratan pertama.</p>
          <a
            href="https://wa.me/6282228487080?text=Halo%20Admin%20Japanindo%2C%20saya%20ingin%20bertanya%20seputar%20Layanan%20JP%20Smart%20Sim"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-xl inline-block"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Hubungi Kami</span>
          </a>
        </div>
      </section>
    </>
  );
}


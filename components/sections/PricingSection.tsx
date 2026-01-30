import Image from "next/image";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-surface-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Pilih Paket <br /> Sesuai{" "}
            <span className="text-purple-600">Kebutuhanmu</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Semua kartu memiliki biaya awal ¥3.300 dan mendapatkan PROMO gratis data internet untuk 2 bulan pertama!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* CALL SIM */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="PREPAID SIM"
                src="/assets/pricing_1.png"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Best Seller
              </div>
            </div>
            <div className="pt-8 pb-8 px-8 text-center flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                CALL SIM (5G)
              </h3>
              <p className="text-sm text-gray-500 mb-4">Telephone + Data Internet</p>
              <div className="text-primary text-3xl font-black mb-2">
                ¥3.300
              </div>
              <p className="text-xs text-gray-500 mb-6 font-medium uppercase">Biaya Awal (Initial Cost)</p>

              <Link href="/order" className="w-full">
                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold py-3 rounded-lg shadow-md shadow-purple-500/20 mb-8 transition hover:scale-105 active:scale-95">
                  Pilih Paket
                </button>
              </Link>
              <div className="text-left space-y-3 mt-auto">
                <p className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-2">
                  Fitur & Keunggulan
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Nomor Telepon Jepang (070/080/090)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Bisa untuk Registrasi Bank & Medsos
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Internet Cepat DOCOMO
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Bulanan mulai ¥1.408 (3GB)
                </div>
              </div>
            </div>
          </div>

          {/* DATA SIM */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 transition duration-300 border-2 border-primary transform md:-translate-y-4 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="PREPAID SIM"
                src="/assets/pricing_4.png"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
            </div>
            <div className="pt-10 pb-8 px-8 text-center flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                DATA SIM (4G LTE)
              </h3>
              <p className="text-sm text-gray-500 mb-4">Khusus Internet</p>
              <div className="text-primary text-4xl font-black mb-2">
                ¥3.300
              </div>
              <p className="text-xs text-gray-500 mb-6 font-medium uppercase">Biaya Awal (Initial Cost)</p>

              <Link href="/order" className="w-full">
                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold py-3 rounded-lg shadow-md shadow-purple-500/20 mb-8 transition hover:scale-105 active:scale-95">
                  Pilih Paket
                </button>
              </Link>
              <div className="text-left space-y-3 mt-auto">
                <p className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-2">
                  Fitur & Keunggulan
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Khusus Data Internet
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Bisa registrasi Bank & Medsos
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Tanpa Kontrak Jangka Panjang
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Bulanan mulai ¥1.078 (3GB)
                </div>
              </div>
            </div>
          </div>

          {/* PREPAID SIM */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="PREPAID SIM"
                src="/assets/pricing_3.png"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="pt-8 pb-8 px-8 text-center flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                PREPAID SIM (E-SIM)
              </h3>
              <p className="text-sm text-gray-500 mb-4">Travel / Short Stay (7GB)</p>
              <div className="text-primary text-3xl font-black mb-2">
                ¥1.200
              </div>
              <p className="text-xs text-gray-500 mb-6 font-medium uppercase">Mulai Dari</p>

              <Link href="/order" className="w-full">
                <button className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold py-3 rounded-lg shadow-md shadow-purple-500/20 mb-8 transition hover:scale-105 active:scale-95">
                  Pilih Paket
                </button>
              </Link>
              <div className="text-left space-y-3 mt-auto">
                <p className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-2">
                  Fitur & Keunggulan
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Cocok untuk Wisata
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Sekali Bayar (One-time)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Tidak perlu registrasi ribet
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="material-icons-round text-primary text-base">check_box</span>
                  Masa aktif 7 Hari
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-gray-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">Daftar Harga Paket Bulanan (Setelah Masa Gratis)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">Kuota Data</th>
                  <th scope="col" className="px-6 py-3">DATA SIM</th>
                  <th scope="col" className="px-6 py-3 rounded-r-lg">CALL SIM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">3 GB</th>
                  <td className="px-6 py-4">¥1.078</td>
                  <td className="px-6 py-4">¥1.408</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">20 GB</th>
                  <td className="px-6 py-4">¥1.848</td>
                  <td className="px-6 py-4">¥2.178</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">100 GB</th>
                  <td className="px-6 py-4">¥5.148</td>
                  <td className="px-6 py-4">¥5.478</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">*Harga dapat berubah sewaktu-waktu. Cek website resmi untuk informasi terbaru.</p>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Butuh bantuan memilih paket?{" "}
            <a className="text-primary font-bold hover:underline" href="https://wa.me/6282228487080">
              Hubungi Kami
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}


import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-200/50 to-transparent dark:from-purple-900/20 rounded-bl-[10rem] -z-10" />
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium">
            <span className="material-icons-round text-sm">network_check</span>{" "}
            Powered by NTT DOCOMO
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Teman Setia
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">
              Kenshusei
            </span>{" "}
            di Negeri Sakura.
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
            Solusi komunikasi praktis, terjangkau, dan andal. Hubungkan dirimu dengan keluarga di Indonesia sejak hari pertama tiba di Jepang.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/order">
              <button className="bg-gradient-to-r from-pink-600 to-purple-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-500/30 transition transform hover:-translate-y-1 hover:shadow-xl">
                Pesan SIM Card Sekarang
              </button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
            <Image
              alt="JP Smart Sim Card"
              className="w-full h-auto object-contain max-h-[400px]"
              height={800}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              src="/assets/hero2.png"
              width={1200}
            />
          </div>
          <div
            className="absolute -top-6 -right-6 md:right-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl z-40 animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase">
                Special Offer!
              </span>
              <span className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Free Data Internet</span>
              <span className="text-xl font-extrabold text-gray-900 dark:text-white">
                2 Bulan Pertama
              </span>
              <span className="text-xs font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Kuota hingga 100GB</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl opacity-50 -z-10" />
        </div>
      </div>
    </section>
  );
}


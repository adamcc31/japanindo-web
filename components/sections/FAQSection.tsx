"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apa itu JP Smart Sim?",
    answer:
      "JP Smart Sim adalah layanan kartu SIM data dan panggilan suara yang menggunakan jaringan NTT DOCOMO, provider terbesar dan terluas di Jepang. Layanan ini dirancang khusus untuk memudahkan warga asing, termasuk kenshusei, agar bisa terhubung tanpa ribet.",
  },
  {
    question: "Apa saja syarat pendaftarannya?",
    answer:
      "Sangat mudah! Anda hanya perlu Foto KTP Indonesia atau Paspor yang masih berlaku. Tidak perlu rekening bank Jepang atau kartu kredit di awal pendaftaran.",
  },
  {
    question: "Berapa biaya awalnya?",
    answer:
      "Biaya administrasi awal (Activation Fee) adalah ¥3.300 (sudah termasuk pajak). Ini hanya dibayarkan sekali saat pertama kali mendaftar.",
  },
  {
    question: "Bagaimana cara pembayarannya?",
    answer:
      "Kami menyediakan metode 'Smart Pit'. Anda bisa membayar tagihan bulanan secara tunai melalui minimarket (Konbini) seperti 7-Eleven, Lawson, Family Mart, dan Circle K di seluruh Jepang.",
  },
  {
    question: "Apakah ada kontrak jangka panjang?",
    answer:
      "Tidak ada! JP Smart Sim tidak mengikat Anda dengan kontrak 2 tahun seperti provider lain. Anda bebas berhenti kapan saja tanpa biaya penalti (denda pembatalan) setelah masa kontrak minimum yang sangat singkat (biasanya 1 bulan pertama).",
  },
  {
    question: "Bagaimana jika saya ingin berhenti berlangganan?",
    answer:
      "Proses pembatalan sangat mudah. Anda cukup menghubungi layanan pelanggan kami atau melakukannya melalui halaman akun pengguna sebelum tanggal 25 bulan berjalan untuk pembatalan di akhir bulan tersebut.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Pertanyaan yang Sering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Diajukan</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Masih bingung? Berikut adalah beberapa jawaban untuk pertanyaan umum seputar layanan JP Smart Sim.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 ${openIndex === index ? "ring-2 ring-primary/20" : ""
                }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 dark:text-white text-lg pr-8">
                  {faq.question}
                </span>
                <span
                  className={`material-icons-round text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index
                  ? "max-h-96 opacity-100 pb-6 px-6"
                  : "max-h-0 opacity-0 px-6 overflow-hidden"
                  }`}
              >
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Masih punya pertanyaan lain?</p>
          <button className="bg-white border border-gray-300 dark:border-gray-600 dark:bg-gray-800 text-gray-700 dark:text-white font-bold py-3 px-8 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center gap-2 mx-auto">
            <span className="material-icons-round">chat</span> <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">Hubungi CS Kami</a>
          </button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700">Mereka?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dengarkan pengalaman teman-teman Kenshusei yang sudah menggunakan layanan JP Smart Sim.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="max-w-md bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl relative">
            <span className="material-icons-round text-6xl text-purple-200 dark:text-gray-700 absolute top-4 left-4 -z-10 opacity-50">
              format_quote
            </span>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &ldquo;aku bulan kemarin ke luar prefektur bahkan di yamanashi-ken yang deket banget sama pegunungan tetep lancar 😭 kuota nya love banget❤️, terimakasih JP Smart&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                <Image
                  alt="Yola Puspitasari"
                  className="object-cover"
                  fill
                  src="/assets/Puspita.png"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Yola Puspitasari
                </h4>
                <p className="text-xs text-primary font-medium">
                  Kenshusei di Tokyo
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl p-8 rounded-3xl relative transform md:-translate-y-4">
            <span className="material-icons-round text-6xl text-primary/20 absolute top-4 left-4 -z-10">
              format_quote
            </span>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &ldquo;Selama saya di jepang dengan menggunakan kartu jp smart Alhamdulillah koneksinya lancar jaya .. Ada juga gratis internetan selama 2 bulan dan biaya internetnya juga murah .. Itu yang membuat saya merasa puas
              dengan menggunakan kartu jp smart .. #Terimakasih_jpsmart ..&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                <Image
                  alt="Budi"
                  className="object-cover"
                  fill
                  src="/assets/budi.png"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Budi Santoso
                </h4>
                <p className="text-xs text-primary font-medium">
                  Kenshusei di Osaka
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="max-w-md bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl relative">
            <span className="material-icons-round text-6xl text-purple-200 dark:text-gray-700 absolute top-4 left-4 -z-10 opacity-50">
              format_quote
            </span>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
              &ldquo;Paket datanya pas banget buat kebutuhan. Kadang dapet bonus kuota juga. Recommended banget buat kenshusei baru yang butuh internet cepet tapi gak mau ribet kontrak tahunan.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                <Image
                  alt="Siti"
                  className="object-cover"
                  fill
                  src="/assets/siti.png"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  Siti Nurhaliza
                </h4>
                <p className="text-xs text-primary font-medium">
                  Kenshusei di Aichi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

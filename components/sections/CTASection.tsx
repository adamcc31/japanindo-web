import Image from "next/image";
const Feature = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <span className="material-icons-round text-yellow-300">verified</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

type CTASectionProps = {
  variant?: "availability" | "city";
};

export default function CTASection({ variant = "availability" }: CTASectionProps) {
  if (variant === "availability") {
    return (
      <section className="py-12">
        <div className="container mx-auto px-6 relative">

          {/* IMAGE — keluar dari card */}
          <div className="hidden md:block absolute left-[180px] bottom-[0px] z-20">
            <Image
              alt="Mitra LPK"
              src="/assets/hegar.png"
              width={360}
              height={560}
            />
          </div>

          {/* CARD */}
          <div className="rounded-3xl bg-gradient-to-r from-pink-600 to-purple-700 p-8 md:p-12 shadow-2xl relative overflow-hidden">

            {/* texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">

              {/* spacer kolom kiri */}
              <div className="hidden md:block" />

              {/* konten */}
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Solusi untuk Kenshusei <br /> Sebelum Berangkat Ke Jepang
                </h3>

                <p className="text-white/80 mb-6">
                  Dapatkan manfaat eksklusif dengan membeli kartu JP Smart Sim:
                </p>

                <div className="space-y-2 mb-8">
                  <Feature text="Sudah dapat nomor Jepang sebelum berangkat" />
                  <Feature text="FREE 2 Bulan Pemakaian UP TO 100GB/Bulan" />
                  <Feature text="GRATIS ONGKOS KIRIM KARTU SE PULAU JAWA" />
                </div>

                <form className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 shadow-lg max-w-lg">
                  <input
                    placeholder="Nama kamu"
                    className="flex-1 px-4 text-gray-800 outline-none"
                  />
                  <a
                    href="https://wa.me/6282228487080"
                    target="_blank"
                    className="bg-gradient-to-r from-pink-600 to-purple-700 text-white px-6 py-3 rounded-md font-bold"
                  >
                    Hubungi Kami
                  </a>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div id="contact" className="relative bg-gradient-to-r from-pink-700 to-purple-800 py-16 overflow-hidden">
      <Image
        alt="City"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        fill
        sizes="100vw"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZQmkM9ICWhs7j8FhTEuZaI0mCiORzNQFmwaiUamqsT8Lp0r2oj1i0awho91cjdqCh2m9-B_qEwEfZXQ2tw604ab1GcKmGfpPI853ZJFKCtIidwXcLiXGgjWYeFKCor25iKo9IgUNdoXGzP6wcLu-zchLkaAtRG-IelkiBiLKYhGzKP5v-etXUiO5JchARsPgvL1ViDBDGX9csQdTH1KFYVh001A3q1nMq3G1MAeJuPUzKkLF0K7_4OTsRL9CA3_YSpBCGQkprFb8"
      />
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Bayar Bulanan Sangat Mudah!
          </h2>
          <p className="text-white/80">
            Bisa bayar di 7-Eleven, Lawson, Family Mart, dan Konbini lainnya.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 shadow-lg">
            <span className="material-icons-round text-primary">receipt_long</span>
            <span className="text-sm font-bold text-gray-800">Tagihan tgl 25</span>
          </div>
          <div className="bg-white p-3 rounded-lg flex items-center gap-2 shadow-lg">
            <span className="material-icons-round text-primary">warning</span>
            <span className="text-sm font-bold text-gray-800">Batas Bayar tgl 31</span>
          </div>
        </div>
      </div>
    </div>
  );
}


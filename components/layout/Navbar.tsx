import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link className="flex items-center space-x-2" href="/">
            <div className="relative w-40 h-10">
              <Image
                src="/assets/japanindo.png"
                alt="Japanindo Travel"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link className="text-primary" href="/#hero">
              Beranda
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              href="/#about"
            >
              Tentang Kami
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              href="/#pricing"
            >
              Produk & Layanan
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              href="/#contact"
            >
              Cara Pembayaran
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
              href="/#faq"
            >
              Kontak
            </Link>
          </div>
          <Link href="/order">
            <button className="bg-gradient-to-r from-pink-600 to-purple-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 active:scale-95">
              Pesan SIM Card
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}


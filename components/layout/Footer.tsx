import Image from "next/image";
import Link from "next/link";
import { COMPANY_ADDRESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-20 pb-10 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="relative w-48 h-12 mb-6">
              <Image
                src="/assets/japanindo.png"
                alt="Japanindo Travel"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Japanindo Travel (JP Smart Sim) adalah mitra terpercaya kenshusei Indonesia di Jepang. Kami menyediakan layanan kartu SIM dengan jaringan luas NTT DOCOMO dan dukungan bahasa Indonesia penuh.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/jpsmart_id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition"
              >
                <span className="material-icons-round text-lg">photo_camera</span>
              </a>
              <a
                href="https://www.tiktok.com/@jpsmart_id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition"
              >
                <span className="material-icons-round text-lg">smart_display</span>
              </a>
              <a
                href="https://wa.me/6281228417051"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white transition"
              >
                <span className="material-icons-round text-lg">chat</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Menu Cepat
            </h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/#hero" className="hover:text-primary transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-primary transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-primary transition">
                  Produk & Layanan
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition">
                  Cara Pembayaran
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-primary transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Dukungan
            </h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/#faq" className="hover:text-primary transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-primary transition">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-primary transition">
                  Panduan Aktivasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-6 text-gray-500 dark:text-gray-400">
              <li className="flex gap-4">
                <span className="material-icons-round text-primary flex-shrink-0">
                  location_on
                </span>
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex gap-4">
                <a href="https://wa.me/6282228487080?text=Halo%20Admin%20Japanindo%2C%20saya%20ingin%20bertanya%20seputar%20Layanan%20JP%20Smart%20Sim" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  <span className="material-icons-round text-primary mt-1">chat</span>
                </a>
                <div>
                  <a href="https://wa.me/6282228487080?text=Halo%20Admin%20Japanindo%2C%20saya%20ingin%20bertanya%20seputar%20Layanan%20JP%20Smart%20Sim" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">0822 2848 7080 (Hanna)</a>
                  <a href="https://wa.me/6282228487080?text=Halo%20Admin%20Japanindo%2C%20saya%20ingin%20bertanya%20seputar%20Layanan%20JP%20Smart%20Sim" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><br /> Layanan Bahasa Indonesia</a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="material-icons-round text-primary flex-shrink-0">
                  <a href="mailto:support@japanindotravel.id" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">email</a>
                </span>
                <a href="mailto:support@japanindotravel.id" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">support@japanindotravel.id</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; 2026 Japanindo Travel. All rights reserved.{""}
            <span className="md:ml-2 block md:inline mt-2 md:mt-0 opacity-70">
              PT JAPANINDO TRAVEL CONNECTION
            </span>
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/#faq" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <a href="https://noxx.tech" className="hover:text-primary transition">
              Develop by <br />Noxx Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


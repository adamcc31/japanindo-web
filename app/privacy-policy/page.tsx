import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { COMPANY_ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan Privasi PT Japanindo Travel Connection terkait pengumpulan, penggunaan, penyimpanan, dan perlindungan data pelanggan.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-8 pb-20 bg-surface-light dark:bg-background-dark">
      <Breadcrumb />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-8 md:p-12 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Kebijakan Privasi</h1>
            <p className="text-white/85 text-lg font-medium">Privacy Policy</p>
            <p className="text-white/70 text-sm mt-2">PT Japanindo Travel Connection</p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {/* BAHASA INDONESIA */}
            <article className="prose dark:prose-invert max-w-none prose-pink prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-p:text-gray-600 dark:prose-p:text-gray-300">
              <h1 className="border-b border-gray-100 dark:border-gray-700 pb-4">
                Kebijakan Privasi — PT Japanindo Travel Connection
              </h1>
              
              <p>
                <strong>Terakhir diperbarui:</strong> 18 Juni 2026
              </p>

              <h2>1. Pendahuluan</h2>
              <p>
                PT Japanindo Travel Connection (&quot;kami&quot;, &quot;Perusahaan&quot;) menghormati privasi setiap pengguna layanan kami, termasuk pelanggan yang menggunakan layanan kartu SIM Jepang dan layanan dukungan melalui WhatsApp. Kebijakan ini menjelaskan data apa yang kami kumpulkan, bagaimana data tersebut digunakan, disimpan, dan dilindungi.
              </p>

              <h2>2. Layanan yang Kami Sediakan</h2>
              <p>
                Kami menyediakan layanan kartu SIM Jepang (di bawah jaringan NTT Docomo) yang ditujukan khususnya bagi Warga Negara Indonesia yang akan bekerja atau magang di Jepang. Kami juga menyediakan dukungan pelanggan melalui WhatsApp Business untuk membantu pengelolaan perpanjangan kontrak, perubahan paket, informasi gangguan layanan, pengaduan, dan konfirmasi penghentian kontrak.
              </p>

              <h2>3. Informasi yang Kami Kumpulkan</h2>
              <p> Kami dapat mengumpulkan informasi berikut sehubungan dengan layanan kami: </p>
              <ul>
                <li>Nama lengkap</li>
                <li>Alamat email</li>
                <li>Nomor telepon (termasuk nomor WhatsApp)</li>
                <li>Nomor paspor dan dokumen/scan paspor</li>
                <li>Nomor telepon Jepang yang terdaftar pada layanan kami</li>
                <li>Nama Lembaga Pelatihan Kerja (LPK) tempat Anda terdaftar, jika berlaku</li>
                <li>Isi percakapan yang Anda kirimkan kepada kami melalui WhatsApp, termasuk pertanyaan, pengaduan, dan permintaan layanan</li>
              </ul>
              <p>
                Data paspor dan dokumen identitas dikumpulkan karena diwajibkan oleh regulasi telekomunikasi Jepang yang mengharuskan verifikasi identitas untuk registrasi kartu SIM. Untuk keperluan ini, sebagian data identitas Anda dapat kami teruskan kepada mitra penyedia jaringan telekomunikasi sesuai yang diwajibkan oleh hukum Jepang.
              </p>

              <h2>4. Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p> Kami menggunakan informasi yang dikumpulkan untuk: </p>
              <ul>
                <li>Memproses dan mengelola layanan kartu SIM (aktivasi, perpanjangan, perubahan paket, penghentian)</li>
                <li>Merespons pertanyaan, keluhan, dan permintaan dukungan pelanggan</li>
                <li>Mengirimkan informasi terkait layanan (misalnya notifikasi gangguan atau jatuh tempo kontrak) dan informasi promosi/marketing terkait layanan kami melalui WhatsApp</li>
                <li>Memenuhi kewajiban hukum, termasuk kewajiban verifikasi identitas pelanggan sesuai regulasi telekomunikasi yang berlaku</li>
              </ul>

              <h2>5. Layanan WhatsApp Business</h2>
              <p>
                Kami menggunakan WhatsApp Business Platform untuk berkomunikasi dengan pelanggan. Pesan yang Anda kirimkan kepada kami melalui WhatsApp diteruskan ke sistem inbox internal kami untuk ditangani oleh tim layanan pelanggan kami. Data percakapan disimpan di infrastruktur kami sendiri dan tidak dibagikan kepada pihak ketiga di luar kebutuhan operasional yang dijelaskan dalam kebijakan ini.
              </p>

              <h2>6. Penyimpanan dan Keamanan Data</h2>
              <p>
                Data Anda disimpan pada infrastruktur cloud milik kami yang dikelola secara internal. Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data dari akses, pengubahan, atau pengungkapan yang tidak sah.
              </p>

              <h2>7. Berapa Lama Kami Menyimpan Data</h2>
              <p>
                Kami menyimpan data percakapan dan data pelanggan selama diperlukan untuk tujuan operasional layanan, umumnya hingga 1 (satu) tahun setelah interaksi terakhir, atau lebih lama jika diwajibkan oleh hukum yang berlaku. Data tidak diperjualbelikan dan hanya digunakan secara internal di lingkup grup perusahaan kami.
              </p>

              <h2>8. Berbagi Data dengan Pihak Ketiga</h2>
              <p>
                Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. Data dapat diproses oleh penyedia infrastruktur teknis kami (penyedia layanan cloud hosting) dan platform WhatsApp Business (Meta) sebagai bagian dari penyediaan layanan komunikasi, sesuai dengan ketentuan masing-masing penyedia tersebut.
              </p>

              <h2>9. Hak Anda</h2>
              <p>
                Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda yang kami simpan, dengan menghubungi kami melalui kontak di bawah ini.
              </p>

              <h2>10. Privasi Anak</h2>
              <p>
                Layanan kami ditujukan bagi individu yang akan bekerja atau magang di luar negeri dan secara umum tidak ditujukan bagi anak-anak di bawah usia kerja yang berlaku.
              </p>

              <h2>11. Perubahan Kebijakan</h2>
              <p>
                Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan diumumkan melalui halaman ini dengan tanggal pembaruan terbaru.
              </p>

              <h2>12. Kontak Kami</h2>
              <p> Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami: </p>
              <address className="not-italic bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 block">
                <strong className="text-gray-900 dark:text-white">PT Japanindo Travel Connection</strong>
                <span className="block mt-2 text-gray-600 dark:text-gray-300">
                  Email:{" "}
                  <a href="mailto:privacy@japanindotravel.id" className="text-primary hover:underline">
                    privacy@japanindotravel.id
                  </a>
                </span>
                <span className="block mt-1 text-gray-600 dark:text-gray-300">
                  Telephone: +62 813-8529-4467
                </span>
                <span className="block mt-1 text-gray-600 dark:text-gray-300">
                  Alamat: {COMPANY_ADDRESS}
                </span>
              </address>
            </article>

            {/* Separator Divider */}
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm font-semibold tracking-wider uppercase">
                English Version
              </span>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            </div>

            {/* ENGLISH VERSION */}
            <article className="prose dark:prose-invert max-w-none prose-pink prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-p:text-gray-600 dark:prose-p:text-gray-300">
              <h1 className="border-b border-gray-100 dark:border-gray-700 pb-4">
                Privacy Policy — PT Japanindo Travel Connection
              </h1>

              <p>
                <strong>Last updated:</strong> June 18, 2026
              </p>

              <h2>1. Introduction</h2>
              <p>
                PT Japanindo Travel Connection (&quot;we&quot;, &quot;the Company&quot;) respects the privacy of all users of our services, including customers who use our Japan SIM card services and customer support via WhatsApp. This policy explains what data we collect, how it is used, stored, and protected.
              </p>

              <h2>2. Our Services</h2>
              <p>
                We provide Japan SIM card services (operating under the NTT Docomo network) targeted specifically at Indonesian citizens who are working or undertaking internships in Japan. We also provide customer support via WhatsApp Business to assist with contract renewals, package changes, service disruption updates, complaints, and contract termination confirmations.
              </p>

              <h2>3. Information We Collect</h2>
              <p> We may collect the following information in connection with our services: </p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (including WhatsApp number)</li>
                <li>Passport number and passport document/scan</li>
                <li>Japan-registered phone number associated with our service</li>
                <li>Name of the job training institution (LPK) you are registered with, if applicable</li>
                <li>The content of conversations you send to us via WhatsApp, including inquiries, complaints, and service requests</li>
              </ul>
              <p>
                Passport and identity document data is collected because it is required under Japanese telecommunications regulations, which mandate identity verification for SIM card registration. For this purpose, we may forward a portion of your identity data to our telecommunications network partner as required by Japanese law.
              </p>

              <h2>4. How We Use Your Information</h2>
              <p> We use the information we collect to: </p>
              <ul>
                <li>Process and manage SIM card services (activation, renewal, package changes, termination)</li>
                <li>Respond to customer inquiries, complaints, and support requests</li>
                <li>Send service-related information (e.g. disruption notices or contract due dates) and promotional/marketing information related to our services via WhatsApp</li>
                <li>Comply with legal obligations, including customer identity verification requirements under applicable telecommunications regulations</li>
              </ul>

              <h2>5. WhatsApp Business Service</h2>
              <p>
                We use the WhatsApp Business Platform to communicate with customers. Messages you send to us via WhatsApp are routed to our internal support inbox for handling by our customer service team. Conversation data is stored on our own infrastructure and is not shared with third parties beyond the operational needs described in this policy.
              </p>

              <h2>6. Data Storage and Security</h2>
              <p>
                Your data is stored on cloud infrastructure that we manage internally. We apply reasonable security measures to protect data from unauthorized access, alteration, or disclosure.
              </p>

              <h2>7. How Long We Retain Data</h2>
              <p>
                We retain conversation and customer data for as long as necessary for operational purposes, generally up to one (1) year after the last interaction, or longer if required by applicable law. Data is not sold and is used only internally within our company group.
              </p>

              <h2>8. Sharing Data with Third Parties</h2>
              <p>
                We do not sell or rent your personal data to third parties. Data may be processed by our technical infrastructure providers (cloud hosting services) and the WhatsApp Business Platform (Meta) as part of delivering our communication services, in accordance with each provider&apos;s respective terms.
              </p>

              <h2>9. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data held by us, by contacting us using the details below.
              </p>

              <h2>10. Children&apos;s Privacy</h2>
              <p>
                Our services are intended for individuals working or undertaking internships abroad and are generally not directed at children below the applicable working age.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Changes will be reflected on this page with an updated revision date.
              </p>

              <h2>12. Contact Us</h2>
              <p> If you have questions about this privacy policy, please contact us: </p>
              <address className="not-italic bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 block">
                <strong className="text-gray-900 dark:text-white">PT Japanindo Travel Connection</strong>
                <span className="block mt-2 text-gray-600 dark:text-gray-300">
                  Email:{" "}
                  <a href="mailto:privacy@japanindotravel.id" className="text-primary hover:underline">
                    privacy@japanindotravel.id
                  </a>
                </span>
                <span className="block mt-1 text-gray-600 dark:text-gray-300">
                  Telephone: +62 813-8529-4467
                </span>
                <span className="block mt-1 text-gray-600 dark:text-gray-300">
                  Address: {COMPANY_ADDRESS}
                </span>
              </address>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

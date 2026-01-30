"use client";

import { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
// REVISI: Hapus import Image karena tidak dipakai
// import Image from "next/image"; 

export default function OrderPage() {
    const [formData, setFormData] = useState({
        nama: "",
        tanggalLahir: "",
        namaLPK: "",
        paket: "CALL SIM",
        tanggalKeberangkatan: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // REVISI: Gunakan Template Literal bersih tanpa manual encoding (%0A) di dalam variabel
        const rawMessage = `Halo Admin, saya ingin memesan JP Smart Sim. Berikut data saya:

1. Nama: ${formData.nama}
2. Tanggal Lahir: ${formData.tanggalLahir}
3. Nama LPK Belajar: ${formData.namaLPK}
4. Pilihan Paket: ${formData.paket}
5. Tanggal Keberangkatan: ${formData.tanggalKeberangkatan}

Mohon dibantu proses selanjutnya. Terima kasih.`;

        // REVISI: Encode seluruh pesan agar aman dari karakter spesial
        const encodedMessage = encodeURIComponent(rawMessage);
        const whatsappUrl = `https://wa.me/6282228487080?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="min-h-screen pt-8 pb-20 bg-surface-light dark:bg-background-dark">
            <Breadcrumb />
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-700 p-8 text-center">
                        <h1 className="text-3xl font-extrabold text-white mb-2">Formulir Pemesanan</h1>
                        <p className="text-white/80">Isi data diri Anda untuk memesan JP Smart Sim</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
                        {/* INPUT NAMA */}
                        <div>
                            <label htmlFor="nama" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                1. Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="nama"
                                name="nama"
                                required
                                value={formData.nama}
                                onChange={handleChange}
                                placeholder="Contoh: Budi Santoso"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* INPUT TANGGAL LAHIR */}
                        <div>
                            <label htmlFor="tanggalLahir" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                2. Tanggal Lahir
                            </label>
                            <input
                                type="date"
                                id="tanggalLahir"
                                name="tanggalLahir"
                                required
                                value={formData.tanggalLahir}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* INPUT LPK */}
                        <div>
                            <label htmlFor="namaLPK" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                3. Nama LPK Belajar
                            </label>
                            <input
                                type="text"
                                id="namaLPK"
                                name="namaLPK"
                                required
                                value={formData.namaLPK}
                                onChange={handleChange}
                                placeholder="Contoh: LPK Japanindo Sejahtera"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* SELECT PAKET */}
                        <div>
                            <label htmlFor="paket" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                4. Pilihan Paket
                            </label>
                            <div className="relative">
                                <select
                                    id="paket"
                                    name="paket"
                                    required
                                    value={formData.paket}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition appearance-none"
                                >
                                    <option value="CALL SIM">CALL SIM (Voice + Data)</option>
                                    <option value="DATA SIM">DATA SIM (Data Only)</option>
                                    <option value="PREPAID SIM">PREPAID SIM (Travel)</option>
                                </select>
                                {/* Pastikan font Material Icons sudah diload di layout global */}
                                <span className="material-icons-round absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                                    expand_more
                                </span>
                            </div>
                        </div>

                        {/* INPUT TANGGAL KEBERANGKATAN */}
                        <div>
                            <label htmlFor="tanggalKeberangkatan" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                5. Tanggal Keberangkatan ke Jepang
                            </label>
                            <input
                                type="date"
                                id="tanggalKeberangkatan"
                                name="tanggalKeberangkatan"
                                required
                                value={formData.tanggalKeberangkatan}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* TOMBOL SUBMIT */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition"
                            >
                                <span className="inline-flex items-center justify-center h-6 w-6">
                                    <span className="material-icons-round text-[20px] leading-none align-middle">whatsapp</span>
                                </span>
                                <span className="leading-none align-middle">Pesan Sekarang via WhatsApp</span>
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                Data Anda aman bersama kami. Tombol ini akan membuka WhatsApp untuk mengirim pesanan.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
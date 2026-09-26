import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — Eagletree",
  description: "Syarat dan ketentuan penggunaan platform dan layanan properti Eagletree.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <PageContainer className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-950 tracking-tight mb-4">
          Syarat & Ketentuan
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          Pembaruan Terakhir: 1 September 2026
        </p>

        <div className="prose prose-sm sm:prose-base max-w-none text-neutral-700">
          <p>
            Selamat datang di Eagletree. Syarat dan Ketentuan berikut mengatur penggunaan Anda atas situs web eagletree.id dan layanan terkait yang ditawarkan oleh PT Eagletree Properti Indonesia ("Eagletree", "kami", atau "milik kami").
          </p>

          <h2>1. Penerimaan Syarat</h2>
          <p>
            Dengan mengakses atau menggunakan platform Eagletree, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak diperkenankan menggunakan layanan kami.
          </p>

          <h2>2. Layanan Platform</h2>
          <p>
            Eagletree adalah platform agen properti yang memfasilitasi penemuan properti, pemasaran, dan penghubungan antara pembeli, penjual, penyewa, dan agen tersertifikasi. Kami berusaha menjaga keakuratan informasi, namun kami tidak menjamin kelengkapan atau keandalan mutlak dari deskripsi properti pihak ketiga.
          </p>

          <h2>3. Akun Pengguna</h2>
          <p>
            Jika Anda membuat akun di platform kami, Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun Anda dan atas semua aktivitas yang terjadi di bawah akun Anda. Anda setuju untuk memberikan informasi yang akurat, terkini, dan lengkap selama proses pendaftaran.
          </p>

          <h2>4. Kekayaan Intelektual</h2>
          <p>
            Semua konten yang ada di platform Eagletree, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, dan perangkat lunak, adalah milik Eagletree atau pemberi lisensinya dan dilindungi oleh undang-undang hak cipta dan kekayaan intelektual Indonesia.
          </p>

          <h2>5. Tautan Pihak Ketiga</h2>
          <p>
            Platform kami mungkin berisi tautan ke situs web atau layanan pihak ketiga yang tidak dimiliki atau dikendalikan oleh Eagletree. Kami tidak memiliki kendali atas, dan tidak bertanggung jawab atas, konten, kebijakan privasi, atau praktik dari situs web pihak ketiga mana pun.
          </p>

          <h2>6. Batasan Tanggung Jawab</h2>
          <p>
            Dalam keadaan apa pun Eagletree, direktur, karyawan, atau agennya tidak bertanggung jawab atas kerusakan tidak langsung, insidental, khusus, konsekuensial, atau hukuman, termasuk hilangnya keuntungan, data, atau niat baik yang timbul dari penggunaan Anda atas platform.
          </p>

          <h2>7. Hukum yang Berlaku</h2>
          <p>
            Syarat ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul sehubungan dengan Syarat ini tunduk pada yurisdiksi eksklusif pengadilan di Indonesia.
          </p>

          <h2>8. Perubahan Syarat</h2>
          <p>
            Kami berhak untuk mengubah atau mengganti Syarat ini kapan saja. Kami akan memberikan pemberitahuan yang wajar tentang perubahan signifikan melalui platform kami. Terus menggunakan layanan kami setelah perubahan tersebut merupakan penerimaan atas Syarat yang direvisi.
          </p>
        </div>
      </PageContainer>
    </div>
  );
}

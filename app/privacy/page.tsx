import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Eagletree",
  description: "Bagaimana Eagletree mengumpulkan, menggunakan, dan melindungi data pribadi Anda.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <PageContainer className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-950 tracking-tight mb-4">
          Kebijakan Privasi
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          Pembaruan Terakhir: 1 September 2026
        </p>

        <div className="prose prose-sm sm:prose-base max-w-none text-neutral-700">
          <p>
            Di Eagle Tree Property (&quot;Eagletree&quot;, dioperasikan oleh PT. Denadi Mitra Propertindo, unit bisnis Unity Group), kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan mengamankan data Anda saat Anda menggunakan layanan dan platform kami.
          </p>

          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami dapat mengumpulkan jenis informasi berikut:
          </p>
          <ul>
            <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, dan detail kontak lainnya saat Anda mendaftar atau mengisi formulir.</li>
            <li><strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda berinteraksi dengan platform kami, termasuk alamat IP, jenis browser, halaman yang dikunjungi, dan riwayat pencarian properti.</li>
            <li><strong>Data Lokasi:</strong> Lokasi perkiraan berdasarkan alamat IP atau izin eksplisit Anda untuk memberikan hasil pencarian yang relevan.</li>
          </ul>

          <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>
            Informasi yang kami kumpulkan digunakan untuk:
          </p>
          <ul>
            <li>Menyediakan, memelihara, dan meningkatkan layanan kami.</li>
            <li>Memproses pertanyaan dan menghubungkan Anda dengan agen properti yang tepat.</li>
            <li>Mempersonalisasi pengalaman pengguna dan rekomendasi properti.</li>
            <li>Berkomunikasi dengan Anda terkait pembaruan layanan, buletin, atau materi promosi (jika Anda memilih untuk berlangganan).</li>
            <li>Menjaga keamanan dan mencegah aktivitas penipuan.</li>
          </ul>

          <h2>3. Pembagian Informasi</h2>
          <p>
            Kami tidak menjual data pribadi Anda. Kami hanya dapat membagikan informasi Anda dalam kondisi berikut:
          </p>
          <ul>
            <li><strong>Dengan Agen Properti:</strong> Saat Anda secara spesifik meminta untuk dihubungi mengenai properti tertentu, kami meneruskan detail kontak Anda ke agen terkait.</li>
            <li><strong>Penyedia Layanan:</strong> Kami bekerja sama dengan vendor pihak ketiga tepercaya (seperti layanan hosting, analitik) yang hanya memproses data atas instruksi kami.</li>
            <li><strong>Kewajiban Hukum:</strong> Jika diharuskan oleh hukum, perintah pengadilan, atau untuk melindungi hak dan keselamatan Eagletree dan penggunanya.</li>
          </ul>

          <h2>4. Keamanan Data</h2>
          <p>
            Kami menerapkan tindakan teknis dan organisasi standar industri untuk melindungi data pribadi Anda dari akses, pengubahan, pengungkapan, atau perusakan yang tidak sah. Namun, tidak ada metode transmisi di internet yang 100% aman, sehingga kami tidak dapat menjamin keamanan absolut.
          </p>

          <h2>5. Hak-Hak Anda</h2>
          <p>
            Sesuai dengan hukum yang berlaku, Anda berhak untuk:
          </p>
          <ul>
            <li>Mengakses informasi pribadi Anda yang kami simpan.</li>
            <li>Meminta koreksi atas data yang tidak akurat.</li>
            <li>Meminta penghapusan akun dan data Anda (Hak untuk Dilupakan).</li>
            <li>Menarik persetujuan Anda untuk komunikasi pemasaran kapan saja.</li>
          </ul>

          <h2>6. Kontak Privasi</h2>
          <p>
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini atau penanganan data Anda, silakan hubungi tim dukungan privasi kami di <a href="mailto:privacy@eagletree.id">privacy@eagletree.id</a>.
          </p>
        </div>
      </PageContainer>
    </div>
  );
}

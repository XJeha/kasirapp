import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan situs serta pemesanan paket aplikasi kasir Kasira, termasuk ketentuan pembayaran manual dan aktivasi layanan.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Syarat & Ketentuan"
      description="Ketentuan penggunaan situs dan pemesanan paket layanan aplikasi kasir."
      updatedAt="[TANGGAL PEMBARUAN]"
    >
      <LegalSection title="1. Ruang lingkup layanan">
        <p>
          Situs {siteConfig.name} menyediakan informasi produk, perbandingan paket, formulir
          pemesanan, dan instruksi pembayaran manual. Situs ini bukan aplikasi kasir dan tidak
          menyediakan akun pengguna, dashboard pelanggan, atau pemrosesan pembayaran otomatis.
        </p>
        <p>
          Akses ke aplikasi kasir diberikan setelah pesanan dan pembayaran diverifikasi serta
          layanan diaktifkan.
        </p>
      </LegalSection>

      <LegalSection title="2. Pemesanan">
        <p>
          Pesanan dibuat dengan mengisi data yang diminta pada halaman pemesanan dan memilih paket
          serta durasi. Nomor referensi pesanan dibuat di browser dan berfungsi sebagai nomor
          rujukan, bukan pengenal transaksi yang dijamin unik oleh server.
        </p>
        <p>
          Data pesanan disimpan sementara di sessionStorage browser. Menutup tab atau membersihkan
          data situs dapat menghilangkan data tersebut sebelum konfirmasi dikirim.
        </p>
      </LegalSection>

      <LegalSection title="3. Harga dan pembayaran">
        <p>
          Harga yang ditampilkan adalah konfigurasi yang dapat berubah. Total akhir dihitung di
          browser berdasarkan paket dan durasi yang dipilih, termasuk diskon durasi apabila
          tersedia.
        </p>
        <p>
          Pembayaran dilakukan secara manual melalui transfer bank, e-wallet, atau QRIS. Situs ini
          tidak memproses pembayaran dan tidak memverifikasi pembayaran secara otomatis. Kami tidak
          pernah meminta PIN, password, OTP, CVV, atau data rahasia rekening.
        </p>
      </LegalSection>

      <LegalSection title="4. Konfirmasi dan aktivasi">
        <p>
          Konfirmasi dilakukan melalui email beserta bukti pembayaran. Tim memverifikasi pembayaran
          secara manual. Estimasi aktivasi {siteConfig.operations.activationEstimate} setelah
          pembayaran terverifikasi, pada jam operasional {siteConfig.operations.supportHours}.
        </p>
        <p>
          Aktivasi dapat tertunda apabila data pesanan tidak lengkap atau bukti pembayaran tidak
          dapat diverifikasi.
        </p>
      </LegalSection>

      <LegalSection title="5. Pembatalan dan pengembalian dana">
        <p>
          Ketentuan pembatalan dan pengembalian dana mengikuti{" "}
          <strong>[KEBIJAKAN PENGEMBALIAN DANA]</strong> yang ditetapkan oleh penyedia layanan.
          Silakan hubungi support sebelum melakukan pembayaran apabila membutuhkan penjelasan.
        </p>
      </LegalSection>

      <LegalSection title="6. Penggunaan yang dilarang">
        <p>Anda tidak boleh menggunakan situs atau layanan untuk:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>aktivitas yang melanggar hukum yang berlaku di Indonesia;</li>
          <li>mengirim data palsu atau menyamar sebagai pihak lain saat memesan;</li>
          <li>mencoba mengakses sistem, data, atau akun yang bukan milik Anda;</li>
          <li>menyebarkan malware atau mengganggu ketersediaan situs dan layanan.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Kekayaan intelektual">
        <p>
          Merek, tampilan, teks, dan aset visual pada situs ini merupakan milik penyedia layanan
          atau digunakan dengan izin. Anda tidak boleh menyalin atau menggunakan aset tersebut untuk
          kepentingan komersial tanpa izin tertulis.
        </p>
      </LegalSection>

      <LegalSection title="8. Batasan tanggung jawab">
        <p>
          Situs disediakan sebagaimana adanya. Kami berupaya menjaga informasi tetap akurat, namun
          tidak menjamin situs bebas dari gangguan teknis. Keputusan bisnis yang diambil berdasarkan
          informasi pada situs ini merupakan tanggung jawab pengguna.
        </p>
        <p>
          Kami tidak bertanggung jawab atas keterlambatan yang disebabkan oleh kesalahan data
          pesanan, bukti pembayaran yang tidak jelas, atau gangguan pada layanan pihak ketiga.
        </p>
      </LegalSection>

      <LegalSection title="9. Perubahan ketentuan">
        <p>
          Ketentuan ini dapat diperbarui sewaktu-waktu. Versi terbaru akan dipublikasikan pada
          halaman ini. Penggunaan situs setelah pembaruan berarti Anda menyetujui ketentuan yang
          berlaku.
        </p>
      </LegalSection>

      <LegalSection title="10. Hukum yang berlaku">
        <p>
          Ketentuan ini tunduk pada hukum yang berlaku di <strong>[YURISDIKSI]</strong>. Sengketa
          akan diselesaikan melalui musyawarah terlebih dahulu.
        </p>
      </LegalSection>

      <LegalSection title="11. Kontak">
        <p>
          {siteConfig.legal.entityName}
          <br />
          {siteConfig.legal.address}
          <br />
          Email:{" "}
          <Link
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-brand underline underline-offset-4"
          >
            {siteConfig.contact.email}
          </Link>
          <br />
          Telepon: {siteConfig.legal.phone}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

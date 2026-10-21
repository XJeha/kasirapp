import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi situs Kasira: data apa yang dimasukkan melalui formulir pesanan, bagaimana data disimpan di browser, dan bagaimana menghubungi kami.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Kebijakan Privasi"
      description="Penjelasan tentang data yang diproses saat Anda menggunakan situs ini dan cara kami menjaganya."
      updatedAt="[TANGGAL PEMBARUAN]"
    >
      <LegalSection title="1. Tentang dokumen ini">
        <p>
          Kebijakan ini berlaku untuk situs {siteConfig.name} dan menjelaskan bagaimana data
          diproses ketika Anda mengunjungi situs, melihat informasi produk, atau mengirim pemesanan
          paket. Situs ini adalah situs statis tanpa akun pengguna, basis data, atau payment
          gateway.
        </p>
      </LegalSection>

      <LegalSection title="2. Data yang Anda masukkan">
        <p>
          Formulir pesanan meminta nama lengkap, nama bisnis, nomor WhatsApp, alamat email, jenis
          usaha, paket, dan durasi langganan. Data tersebut diperlukan untuk memproses pesanan dan
          menghubungi Anda terkait aktivasi layanan.
        </p>
        <p>
          Data formulir disimpan sementara di <strong>sessionStorage</strong> browser Anda dan tidak
          dikirim ke server kami. Situs ini tidak memiliki backend penyimpanan pesanan.
        </p>
      </LegalSection>

      <LegalSection title="3. Email konfirmasi pembayaran">
        <p>
          Tombol “Konfirmasi via Email” membuka aplikasi email pada perangkat Anda dengan subjek dan
          isi yang sudah terisi. Email baru terkirim setelah Anda menekan tombol kirim di aplikasi
          email tersebut. Lampirkan bukti pembayaran secara manual.
        </p>
        <p>
          Jangan pernah mengirim PIN, password, OTP, CVV, nomor kartu lengkap, atau kredensial
          perbankan melalui email maupun kanal lain.
        </p>
      </LegalSection>

      <LegalSection title="4. Analitik dan cookie">
        <p>
          Situs ini tidak memasang alat analitik pihak ketiga dan tidak menggunakan cookie untuk
          pelacakan. Tersedia hook event internal yang hanya mengirim CustomEvent di browser, tanpa
          mengirim data pribadi ke layanan eksternal. Jika integrasi analitik ditambahkan di
          kemudian hari, kebijakan ini akan diperbarui.
        </p>
      </LegalSection>

      <LegalSection title="5. Penyimpanan dan penghapusan">
        <p>
          Data pesanan di sessionStorage bertahan selama tab browser dibuka dan dapat terhapus
          otomatis saat tab ditutup, atau ketika Anda membersihkan data situs. Anda dapat
          menghapusnya kapan saja melalui pengaturan browser.
        </p>
        <p>
          Email konfirmasi dan bukti pembayaran yang Anda kirim disimpan oleh tim layanan sesuai
          kebutuhan pemrosesan pesanan dan kebijakan retensi internal.
        </p>
      </LegalSection>

      <LegalSection title="6. Keamanan">
        <p>
          Situs disarankan diakses melalui HTTPS. Kami tidak meminta dan tidak menyimpan PIN,
          password, OTP, CVV, atau data kartu. Pembayaran dilakukan di luar situs melalui bank,
          e-wallet, atau aplikasi QRIS milik Anda.
        </p>
      </LegalSection>

      <LegalSection title="7. Layanan pihak ketiga">
        <p>
          Situs dapat membuka aplikasi email atau tautan WhatsApp milik Anda. Pemrosesan data pada
          aplikasi tersebut tunduk pada kebijakan privasi masing-masing penyedia. Situs ini tidak
          menggunakan payment gateway dan tidak mengirim data pesanan ke penyedia pembayaran.
        </p>
      </LegalSection>

      <LegalSection title="8. Hak Anda">
        <p>
          Anda dapat meminta informasi, koreksi, atau penghapusan data pesanan yang telah dikirim
          melalui email dengan menghubungi {siteConfig.contact.email}. Sertakan nomor referensi
          pesanan agar permintaan dapat diproses.
        </p>
      </LegalSection>

      <LegalSection title="9. Identitas pengelola">
        <p>
          {siteConfig.legal.entityName}
          <br />
          {siteConfig.legal.address}
          <br />
          Email: {siteConfig.contact.email}
          <br />
          Telepon: {siteConfig.legal.phone}
        </p>
      </LegalSection>

      <LegalSection title="10. Perubahan kebijakan">
        <p>
          Kebijakan ini dapat diperbarui apabila layanan atau ketentuan pemrosesan data berubah.
          Versi terbaru akan ditampilkan pada halaman ini.
        </p>
        <p>
          Pertanyaan mengenai kebijakan privasi dapat dikirim ke{" "}
          <Link
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-brand underline underline-offset-4"
          >
            {siteConfig.contact.email}
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

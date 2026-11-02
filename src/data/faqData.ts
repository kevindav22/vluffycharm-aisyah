// Sumber tunggal FAQ. Dipakai oleh komponen FAQSection dan JSON-LD FAQPage,
// supaya teks yang tampil di halaman selalu sama dengan yang dibaca Google.
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    question: "Berapa lama proses pembuatan charm bracelet?",
    answer:
      "Proses pembuatan biasanya memakan waktu 3-5 hari kerja setelah desain dikonfirmasi. Untuk pesanan dalam jumlah banyak, estimasi bisa lebih lama.",
  },
  {
    question: "Apakah charm bisa dilepas dan diganti?",
    answer:
      "Ya, charm kami dirancang dengan kait yang memungkinkan kamu untuk melepas dan mengganti charm sesuai keinginan.",
  },
  {
    question: "Bahan apa yang digunakan untuk charm?",
    answer:
      "Kami menggunakan bahan premium yang aman untuk kulit sensitif, termasuk paduan logam berkualitas tinggi dan cat non-toxic.",
  },
  {
    question: "Bagaimana cara memesan via WhatsApp?",
    answer:
      "Pilih produk yang diinginkan, lalu klik tombol 'Pesan via WhatsApp'. Kamu akan langsung terhubung dengan admin kami untuk konfirmasi pesanan.",
  },
  {
    question: "Apakah bisa request desain custom?",
    answer:
      "Tentu! Gunakan fitur Charm Builder atau Watch Studio untuk membuat desain sendiri. Tim kami akan membantu mewujudkan desainmu.",
  },
  {
    question: "Bagaimana cara perawatan charm bracelet?",
    answer:
      "Hindari kontak langsung dengan air dan bahan kimia. Simpan di tempat kering saat tidak digunakan. Lap dengan kain lembut jika kotor.",
  },
];

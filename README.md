# Website Pribadi

Website pribadi satu halaman dengan tema hijau. Dibuat hanya dengan HTML, CSS, dan JavaScript murni, tanpa framework dan tanpa proses build.

## Fitur

- Bagian beranda, tentang, keahlian, proyek, dan kontak
- Mode terang dan gelap, pilihan disimpan di browser
- Menu navigasi yang menyesuaikan layar ponsel
- Penanda menu aktif saat halaman digulir
- Formulir kontak dengan validasi, mengirim lewat aplikasi email pengguna
- Tampilan responsif dan mendukung navigasi keyboard

## Struktur file

```
website-pribadi/
├── index.html   # isi halaman
├── style.css    # tampilan dan warna
├── script.js    # interaksi
└── README.md    # petunjuk ini
```

## Cara menjalankan

1. Unduh semua file dan simpan dalam satu folder.
2. Buka `index.html` dengan dua kali klik. Tidak perlu server.

Font Fraunces dan Nunito Sans dimuat dari Google Fonts. Tanpa internet, website tetap tampil dengan font bawaan sistem.

## Cara mengubah isi

1. **Nama dan ringkasan**: edit `index.html` dan ganti "Nama Anda" serta kalimat di bagian `hero`.
2. **Inisial di lingkaran daun**: ubah teks di `<span id="initials">`.
   Untuk memakai foto, ganti span itu dengan `<img src="foto.jpg" alt="Foto Anda">`
   lalu tambahkan `.leaf img { width: 100%; height: 100%; object-fit: cover; }` di `style.css`.
3. **Tentang, keahlian, proyek**: edit teks di bagian masing-masing. Salin atau hapus
   blok `<article class="project">` sesuai jumlah proyek Anda.
4. **Email tujuan formulir**: di `script.js`, ubah nilai `EMAIL_TUJUAN`.

## Mengubah warna

Semua warna ada di bagian atas `style.css`:

| Variabel | Fungsi |
| --- | --- |
| `--bg` | latar halaman |
| `--accent` | warna hijau utama (tombol, tautan) |
| `--accent-soft` | hijau muda untuk label keahlian |
| `--leaf-a`, `--leaf-b` | gradasi lingkaran daun |

Warna mode gelap ada di blok `[data-theme="dark"]`.

## Menayangkan online

Unggah seluruh folder ke layanan hosting statis seperti GitHub Pages, Netlify, atau Cloudflare Pages.

## Lisensi

Bebas dipakai dan diubah untuk keperluan pribadi.

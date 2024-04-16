# API Shortlink menggunakan Koa.js

API Shortlink adalah sebuah proyek API yang dibangun menggunakan framework Koa.js untuk membuat dan mengelola shortlink. Proyek ini menggunakan kombinasi antara library nanoid dan algoritma hashing SHA-256 untuk menghasilkan shortlink yang unik dengan kemungkinan konflik yang sangat rendah.

## Fitur

- Membuat shortlink dari URL panjang.
- Mengambil statistik penggunaan untuk setiap shortlink. [SOON]
- Memperbarui atau menghapus shortlink yang ada. [SOON]
- Validasi keunikan shortlink menggunakan algoritma hashing SHA-256.
- API sederhana yang dapat diakses melalui HTTP.

## Penggunaan

1. Instal dependensi proyek dengan menjalankan perintah:

   ```bash
   npm install
   ```

2. Lakukan generate untuk inisialisasi prisma

   ```bash
   npx prisma generate
   ```

4. Lakukan migrasi database dengan menjalankan perintah:

   ```bash
   npx prisma migrate dev
   ```

5. Jalankan proyek dengan menjalankan perintah:

   ```bash
   node main.js
   ```

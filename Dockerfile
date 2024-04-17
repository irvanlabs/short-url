# Gunakan node versi terbaru sebagai base image
FROM node:latest

# Buat direktori aplikasi di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json (jika ada) dan instal dependensi
COPY package*.json ./
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Perintah yang akan dijalankan saat container dijalankan
CMD [ "npm", "start" ]

document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.querySelector('#tbody');
    /**
     * const tableBody = document.querySelector('#tbody');
     * Mengambil referensi ke elemen dengan ID `tbody`
     * Elemen ini nantinya akan digunakan untuk menambahkan baris-baris baru ke dalam tabel.
     */

    const updateTable = async () => {
        /**
         * const updateTable = async () => { ... }
         * Membuat fungsi bernama `updateTable`
         * yang akan bertanggung jawab untuk mengambil data dari database 
         * dan memperbarui tampilan tabel pada halaman.
         */
        try {
            let data = await window.api.fetchData();
            /**
             * let data = await window.api.fetchData();
             * Menggunakan API yang telah di-expose dari file preload.js
             * untuk mengambil data dari database secara asynchronous.
             * Fungsi ini mengembalikan array objek yang berisi data mahasiswa.
             */

            // Clear existing table body
            tableBody.innerHTML = '';
            /**
             * tableBody.innerHTML = '';
             * Membersihkan isi dari elemen tbody (table body) untuk mempersiapkan penambahan data yang baru.
             */

            if (data && data.length > 0) {
                data.forEach((item, index) => {
                    /**
                     * data.forEach((item, index) => { ... }
                     * Menggunakan perulangan forEach untuk setiap objek dalam array data.
                     * Untuk setiap objek, membuat baris baru di tabel dan mengisi dengan data yang sesuai.
                     */

                    // Combine mFName and mLName
                    const fullName = `${item.mFName} ${item.mLName}`;
                    /**
                     * const fullName = ${item.mFName} ${item.mLName};
                     * Menggabungkan mFName dan mLName dari setiap objek untuk membentuk nama lengkap mahasiswa.
                     */

                    // Create a new row
                    const newRow = document.createElement('tr');
                    /**
                     * const newRow = document.createElement('tr');
                     * Membuat elemen <tr> baru untuk mewakili baris baru dalam tabel.
                     */

                    newRow.innerHTML = `
                        <th scope="row">${index + 1}</th>
                        <td>${item.mNIM}</td>
                        <td>${fullName}</td>
                        <td>${item.pName}</td>
                        <td>${item.mSemester}</td>
                        <td>${item.mNoWa}</td>
                    `;
                    /**
                     * newRow.innerHTML = ...;
                     * Mengatur HTML dalam elemen baris baru tersebut dengan menambahkan sel-sel (kolom-kolom)
                     * yang sesuai dengan data mahasiswa yang diambil dari database.
                     */

                    // Append the new row to the table body
                    tableBody.appendChild(newRow);
                    /**
                     * tableBody.appendChild(newRow);
                     * Menambahkan elemen baris baru ke dalam elemen tbody (table body)
                     * sehingga ditampilkan pada halaman.
                     */
                });
            } else {
                // Sembunyikan hanya bagian tbody dengan memberi display: none pada elemen HTML tbody
                tableBody.style.display = 'none';
                /**
                 * tableBody.style.display = 'none';
                 * Jika tidak ada data yang ditemukan, kemudian menyembunyikan elemen tbody
                 * dengan mengatur properti display menjadi 'none'.
                 */
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Initial table update
    updateTable();

    // Set up interval to periodically update the table (adjust the interval as needed)
    setInterval(updateTable, 3000); // Update every 3 seconds (3000 milliseconds)
    /**
     * setInterval(updateTable, 3000);
     * Menetapkan interval (periode waktu) untuk secara periodik memanggil fungsi updateTable
     * setiap 3 detik (3000 milidetik). Ini dilakukan untuk memperbarui tampilan tabel secara otomatis
     * jika ada perubahan data di database.
     */
});

const updateOnlineStatus = () => {
    document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline'
}

window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

updateOnlineStatus()
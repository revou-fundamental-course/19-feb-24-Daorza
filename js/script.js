function tampilkanWaktu() {
    const waktuSaatIni = new Date();

    const jam = waktuSaatIni.getHours();
    const menit = waktuSaatIni.getMinutes();
    const detik = waktuSaatIni.getSeconds();

    const formatWaktu = `${jam.toString().padStart(2, '0')}:${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;

    document.getElementById('waktu').textContent = `Waktu saat ini: ${formatWaktu}`;
}
window.addEventListener('load', tampilkanWaktu);

const form = document.getElementById('myForm');
const hasilNama = document.getElementById('hasilNama');
const hasilTanggalLahir = document.getElementById('hasilTanggalLahir');
const hasilJenisKelamin = document.getElementById('hasilJenisKelamin');
const hasilDeskripsi = document.getElementById('hasilDeskripsi');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nama = form.elements.nama.value;
    const tanggalLahir = form.elements.tanggal_lahir.value;
    const jenisKelamin = form.elements.jenis_kelamin.value;
    const deskripsi = form.elements.deskripsi.value;

    hasilNama.textContent = `Nama: ${nama}`;
    hasilTanggalLahir.textContent = `Tanggal Lahir: ${tanggalLahir}`;
    hasilJenisKelamin.textContent = `Jenis Kelamin: ${jenisKelamin}`;
    hasilDeskripsi.textContent = `Deskripsi: ${deskripsi}`;
});


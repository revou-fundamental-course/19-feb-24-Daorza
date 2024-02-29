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
const hasilDiv = document.getElementById('hasil');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nama = form.elements.nama.value;
    const tanggalLahir = form.elements.tanggal_lahir.value;
    const jenisKelamin = form.elements.jenis_kelamin.value;
    const deskripsi = form.elements.deskripsi.value;

    hasilDiv.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Deskripsi:</strong> ${deskripsi}</p>
    `;
});
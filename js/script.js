// Function untuk mengisi nama di ucapan sambutan
function updateGreeting() {
    const userName = "There"; 
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = `Hi ${userName}, Welcome To Website`;
    }
}

// Function untuk menampilkan waktu saat ini
function updateCurrentTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    if (timeElement) {
        const options = {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        timeElement.textContent = now.toLocaleString('en-US', options);
    }
}

// Function untuk menangani pengiriman formulir
function handleFormSubmit(event) {
    event.preventDefault();  

    const form = event.target;
    
    // Ambil nilai dari form
    const name = form.querySelector('#name').value;
    const tanggalLahir = form.querySelector('#tanggal-lahir').value;
    const jenisKelamin = form.querySelector('input[name="jenis-kelamin"]:checked')?.value || 'Tidak disebutkan';
    const pesan = form.querySelector('#pesan').value;

    // Lakukan validasi dasar pastiiin g kosong
    if (!name.trim()) {
        alert("Nama harus diisi!");
        return;  
    }

    // Validasi tambahan buat tanggal lahir
    if (tanggalLahir && isNaN(Date.parse(tanggalLahir))) {
        alert("Format tanggal lahir tidak valid!");
        return;
    }
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-tanggal-lahir').textContent = tanggalLahir;
    document.getElementById('output-jenis-kelamin').textContent = jenisKelamin;
    document.getElementById('output-pesan').textContent = pesan;

    alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
    form.reset();
}

// jalanin fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    updateCurrentTime();

    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', handleFormSubmit);
    }
});

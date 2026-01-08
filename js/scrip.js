console.log("Aplikasi Beranda LKS Cloud Dimuat (index.html");
console.log("Memulai Proses fetch data untuk fitur dinamis");

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(Response =>{
    console.log("Data API Berhasil diterima Status:", Response.status)
    return Response.json()
})
.then(data =>{
    const apiDiv = document.getElementById('data-api')
    apiDiv.innerHTML = `
    <h4>Contoh Data yang Berhasil Diambil</h4>
    <strong>Judul:</strong> ${data.title} <br>
    <strong>Isi:</strong> ${data.body.substring (0, 100)}
    `
})
.catch(error =>{
    console.error("Terjadi masalah saat mengambil data dari API", error);
    document.getElementById('data-api').textContent = 'Gagal Memuat API.';
})
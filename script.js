// Menunggu hingga dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan pesan di console
    console.log("Halaman telah dimuat!");

    // Menambahkan event listener ke tombol
    const button = document.querySelector("button");
    if (button) {
        button.addEventListener("click", function () {
            alert("Tombol telah diklik!");
        });
    }
});

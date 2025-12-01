// Menunggu sampai seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", function() {

    // Opsi untuk observer (kapan animasi dipicu)
    // threshold 0.2 artinya animasi mulai ketika 20% elemen terlihat di layar
    const options = {
        root: null, // menggunakan viewport browser
        threshold: 0.2, 
        rootMargin: "0px"
    };

    // Membuat Observer baru
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke dalam viewport (layar)
            if (entry.isIntersecting) {
                // Tambahkan class 'show-animate' yang berisi CSS visible
                entry.target.classList.add('show-animate');
                // (Opsional) Hentikan observasi setelah animasi selesai agar performa lebih baik
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    // Pilih semua elemen yang memiliki class 'hidden-fade-up'
    const hiddenElements = document.querySelectorAll('.hidden-fade-up');

    // Mulai mengamati setiap elemen tersebut
    hiddenElements.forEach(el => observer.observe(el));
});
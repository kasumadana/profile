// Menunggu DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Menandai halaman aktif di navigasi
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Membuat tombol scroll to top
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "↑";
  scrollToTopButton.classList.add("scroll-to-top");
  document.body.appendChild(scrollToTopButton);

  // Event handler untuk scroll to top
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Menampilkan/menyembunyikan tombol scroll to top
  window.addEventListener("scroll", () => {
    scrollToTopButton.classList.toggle("visible", window.scrollY > 300);
  });
});

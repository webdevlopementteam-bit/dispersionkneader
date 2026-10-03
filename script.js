/* ===== Pneumatic / Hydraulic text switcher ===== */
const changingText = document.getElementById("changingText");
const words = ["Pneumatic", "Hydraulic"];
let index = 0;

if (changingText) {
  setInterval(() => {
    changingText.style.opacity = "0";

    setTimeout(() => {
      index = (index + 1) % words.length;
      changingText.textContent = words[index];
      changingText.style.opacity = "1";
    }, 400);
  }, 2000);
}

/* ===== Gallery lightbox ===== */
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeBtn = document.querySelector(".close-gallery");

  if (!lightbox || !lightboxImage || !closeBtn) return;

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");

      lightboxImage.src = img.src;
      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});
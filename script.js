document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    const fullImage = document.createElement("img");
    fullImage.src = img.src;
    lightbox.appendChild(fullImage);
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", () => {
      document.body.removeChild(lightbox);
    });
  });
});

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll(".portrait-image").forEach((image) => {
  const frame = image.closest(".portrait-frame");
  const show = () => frame?.classList.add("photo-ready");

  if (image.complete && image.naturalWidth > 0) {
    show();
  } else {
    image.addEventListener("load", show);

    image.addEventListener("error", () => {
      frame?.classList.add("photo-missing");
    });
  }
});

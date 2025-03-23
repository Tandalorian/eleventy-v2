document.querySelectorAll(".nav-button").forEach((button) => {
  // On hover, change the image and keep it
  button.addEventListener("mouseover", function () {
    const heroImage = document.getElementById("hero-image");
    const newImage = this.getAttribute("data-image");
    heroImage.src = newImage;
  });

  // Navigate to the page on click
  button.addEventListener("click", function () {
    const pageSlug = this.getAttribute("data-page");
    window.location.href = `/${pageSlug}/`;
  });
});

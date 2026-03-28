// Just setting the year in the footer (small but nice)
document.getElementById("year").textContent = new Date().getFullYear();
// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form interaction
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  alert("Thank you! Your message has been sent.");

  form.reset(); // clear form
});

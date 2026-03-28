
// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project search filter
const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const searchStatus = document.getElementById("searchStatus");
const emptyState = document.getElementById("emptyState");

if (projectSearch) {
  projectSearch.addEventListener("input", function () {
    const query = projectSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    projectCards.forEach(function (card) {
  const searchableText = (card.dataset.search || "").toLowerCase();
  const matches = searchableText.includes(query);

  if (matches) {
    card.style.display = "";
    visibleCount++;
  } else {
    card.style.display = "none";
  }
});

    if (query === "") {
      searchStatus.textContent = "Showing all projects.";
    } else {
      searchStatus.textContent = `Found ${visibleCount} project(s).`;
    }

    if (visibleCount === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";
    }
  });

  searchStatus.textContent = "Showing all projects.";
}

// Contact form interaction
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();
  });
}

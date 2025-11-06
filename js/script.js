document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product-item");
  const viewAllBtn = document.getElementById("viewAllBtn");
  const visibleCount = 6; // show 6 by default

  // Hide extra items initially
  products.forEach((item, index) => {
    if (index >= visibleCount) item.style.display = "none";
  });

  let expanded = false;

  viewAllBtn.addEventListener("click", function (e) {
    e.preventDefault();
    expanded = !expanded;

    products.forEach((item, index) => {
      if (expanded || index < visibleCount) {
        item.style.display = "block";
        item.classList.add("fade-in");
      } else {
        item.style.display = "none";
      }
    });

    viewAllBtn.textContent = expanded ? "Show Less" : "View All Products";
  });
});

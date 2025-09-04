const cards = document.querySelectorAll(".grid");
const mainGrid = document.getElementById("main-grid");

cards.forEach(card => {
  card.dataset.originalText = card.textContent;

  card.addEventListener("click", () => {
    if (card.classList.contains("expanded")) return;

    mainGrid.classList.add("hide-others");
    card.classList.add("expanded");

    const url = card.getAttribute("data-url");
    card.innerHTML = `<iframe src="${url}" class="iframe-content"></iframe>`;
  });
});

document.getElementById("main-back").addEventListener("click", () => {
  window.location.href = "projects.html";
});

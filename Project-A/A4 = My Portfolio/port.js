const cards = document.querySelectorAll(".nav-link");
const mainGrid = document.getElementById("main-grid");
const backBtn = document.getElementById("global-back");

cards.forEach(card => {
  card.dataset.originalText = card.textContent;

  card.addEventListener("click", () => {
    if (card.classList.contains("expanded")) return;

    mainGrid.classList.add("hide-others");
    card.classList.add("expanded");

    const url = card.getAttribute("data-url");
    card.innerHTML = `<iframe src="${url}" class="iframe-content"></iframe>`;

    backBtn.classList.remove("hidden");
  });
});

backBtn.addEventListener("click", () => {
  const expandedCard = document.querySelector(".grid.expanded");
  if (expandedCard) resetCard(expandedCard);
});

function resetCard(card) {
  card.classList.remove("expanded");
  mainGrid.classList.remove("hide-others");
  backBtn.classList.add("hidden");
  card.innerHTML = card.dataset.originalText;
}

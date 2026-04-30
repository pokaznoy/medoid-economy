const searchInput = document.getElementById("search");
const filtersContainer = document.getElementById("filters");
const cardsContainer = document.getElementById("cards");

let currentCategory = "Усі";

function getCategories() {
  const cats = medoids.map(m => m.category).filter(Boolean);
  return ["Усі", ...new Set(cats)];
}

function renderFilters() {
  const categories = getCategories();

  filtersContainer.innerHTML = categories.map(cat => `
    <button
      onclick="setCategory('${cat}')"
      class="px-3 py-1 rounded-full border ${
        currentCategory === cat ? "bg-black text-white" : "bg-white"
      }"
    >
      ${cat}
    </button>
  `).join("");
}

function setCategory(cat) {
  currentCategory = cat;
  renderFilters();
  renderCards();
}

function getFilteredData() {
  const query = searchInput.value.toLowerCase();

  return medoids.filter(m => {
    const businessName = m.business_name || "";
    const owner = m.owner || "";
    const description = m.description || "";
    const category = m.category || "";

    const matchesSearch =
      businessName.toLowerCase().includes(query) ||
      owner.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query);

    const matchesCategory =
      currentCategory === "Усі" || category === currentCategory;

    return matchesSearch && matchesCategory;
  });
}

function renderCards() {
  const data = getFilteredData();

  if (data.length === 0) {
    cardsContainer.innerHTML = `<p class="text-center text-gray-500">Нічого не знайдено</p>`;
    return;
  }

  cardsContainer.innerHTML = data.map(m => `
    <div class="bg-white p-4 rounded-xl shadow">
      <div class="text-xs text-gray-500 mb-1">${m.category || ""}</div>

      <h2 class="text-lg font-semibold">${m.business_name || "Без назви"}</h2>

      <div class="text-sm text-gray-600 mb-2">
        👤 ${m.owner || "Не вказано"}
      </div>

      <p class="text-sm mb-3">${m.description || ""}</p>

      ${
        m.link
          ? `<a href="${m.link}" target="_blank" class="inline-block bg-black text-white px-3 py-1 rounded-lg">Зв'язатися</a>`
          : ""
      }
    </div>
  `).join("");
}

searchInput.addEventListener("input", renderCards);

renderFilters();
renderCards();

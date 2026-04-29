const searchInput = document.getElementById("search");
const filtersContainer = document.getElementById("filters");
const cardsContainer = document.getElementById("cards");

let currentCategory = "all";

// Отримати всі категорії
function getCategories() {
  const cats = medoids.map(m => m.category);
  return ["all", ...new Set(cats)];
}

// Малюємо кнопки
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

// Зміна категорії
function setCategory(cat) {
  currentCategory = cat;
  renderFilters();
  renderCards();
}

// Фільтрація + пошук
function getFilteredData() {
  const query = searchInput.value.toLowerCase();

  return medoids.filter(m => {
    const matchesSearch =
      m.name.toLowerCase().includes(query) ||
      m.owner.toLowerCase().includes(query) ||
      m.description.toLowerCase().includes(query);

    const matchesCategory =
      currentCategory === "all" || m.category === currentCategory;

    return matchesSearch && matchesCategory;
  });
}

// Малюємо картки
function renderCards() {
  const data = getFilteredData();

  if (data.length === 0) {
    cardsContainer.innerHTML = `<p class="text-center text-gray-500">Нічого не знайдено</p>`;
    return;
  }

  cardsContainer.innerHTML = data.map(m => `
    <div class="bg-white p-4 rounded-xl shadow">

      <div class="text-xs text-gray-500 mb-1">${m.category}</div>

      <h2 class="text-lg font-semibold">${m.name}</h2>

      <div class="text-sm text-gray-600 mb-2">
        👤 ${m.owner}
      </div>

      <p class="text-sm mb-3">${m.description}</p>

      <a
        href="${m.link}"
        target="_blank"
        class="inline-block bg-black text-white px-3 py-1 rounded-lg"
      >
        Зв'язатися
      </a>

    </div>
  `).join("");
}

// Ініціалізація
searchInput.addEventListener("input", renderCards);

renderFilters();
renderCards();

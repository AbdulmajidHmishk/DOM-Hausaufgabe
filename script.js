const generateRecipeBtn = document.getElementById('generateRecipeBtn');
const recipeList = document.getElementById('recipeList');
const recipeTitle = document.getElementById('recipeTitle');
const messageDiv = document.getElementById('message');

const recipes = [
  {
    name: "Sommerlicher Salat",
    ingredients: [
      "200g gemischter Salat",
      "100g Kirschtomaten",
      "1 Gurke",
      "50g Feta-Käse",
      "2 EL Olivenöl",
      "1 EL Balsamico-Essig",
      "Salz, Pfeffer"
    ]
  },
  {
    name: "Pasta Pesto",
    ingredients: [
      "250g Spaghetti",
      "100g Basilikumpesto",
      "50g Parmesan",
      "Knoblauchzehe",
      "Pinienkerne",
      "Olivenöl"
    ]
  },
  {
    name: "Gemüse-Curry",
    ingredients: [
      "1 Zwiebel",
      "2 Karotten",
      "1 Zucchini",
      "200g Kichererbsen",
      "400ml Kokosmilch",
      "2 EL Currypulver",
      "Reis als Beilage"
    ]
  },
  {
    name: "Schoko-Muffins",
    ingredients: [
      "150g Mehl",
      "100g Zucker",
      "2 EL Kakao",
      "1 TL Backpulver",
      "1 Prise Salz",
      "1 Ei",
      "100ml Milch",
      "50g geschmolzene Butter",
      "50g Schokostückchen"
    ]
  },
  {
    name: "Frucht-Smoothie",
    ingredients: [
      "1 Banane",
      "100g Beeren (gefroren)",
      "150ml Mandelmilch",
      "1 EL Chiasamen",
      "Optional: Honig zum Süßen"
    ]
  }
];

function generateRandomRecipe() {
  recipeList.innerHTML = '';
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const selectedRecipe = recipes[randomIndex];
  recipeTitle.textContent = `Zutaten für: ${selectedRecipe.name}`;

  selectedRecipe.ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;

    if (ingredient.toLowerCase().includes("öl") ||
        ingredient.toLowerCase().includes("butter") ||
        ingredient.toLowerCase().includes("milch")) {
      listItem.classList.add('highlight-ingredient');
    }

    recipeList.appendChild(listItem);
  });

  if (messageDiv) {
    messageDiv.innerHTML = `<p>Neues Rezept "<b>${selectedRecipe.name}</b>" generiert!</p>`;
    messageDiv.style.backgroundColor = '#e1f5fe';
    messageDiv.style.borderColor = '#42a5f5';
  }
}

generateRecipeBtn.addEventListener('click', generateRandomRecipe);
generateRandomRecipe();

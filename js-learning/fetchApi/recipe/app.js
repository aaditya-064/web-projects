const recipeTitle = document.querySelector("#recipeTitle_");
const recipeIngMe = document.querySelector("#recipeIngredientsWithMeasure");
const recipeInstructions = document.querySelector("#recipeInstructions_");
const recipeTags = document.querySelector("#recipeTags");
const recipeCategory = document.querySelector("#recipeCategory");
const recipeArea = document.querySelector("#recipeArea");
const loaderScreen = document.querySelector("#loader");
const bodyContent = document.querySelector("#contents");

const fetchRecipe = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );
  const resParse = await response.json();
  loaderScreen.classList.add("d-none");
  bodyContent.classList.remove("d-none");
  const result = resParse.meals[0];
  const mealName = result.strMeal;
  const mealCategory = result.strCategory;
  const mealArea = result.strArea;
  const mealInstructions = result.strInstructions;
  const mealTags = result.strTags;
  const mealIngredients = {
    i1: result.strIngredient1,
    i2: result.strIngredient2,
    i3: result.strIngredient3,
    i4: result.strIngredient4,
    i5: result.strIngredient5,
    i6: result.strIngredient6,
    i7: result.strIngredient7,
    i8: result.strIngredient8,
  };
  const mealMeasurements = {
    m1: result.strMeasure1,
    m2: result.strMeasure2,
    m3: result.strMeasure3,
    m4: result.strMeasure4,
    m5: result.strMeasure5,
    m6: result.strMeasure6,
    m7: result.strMeasure7,
    m8: result.strMeasure8,
  };
  recipeTitle.textContent = mealName;
  recipeTags.textContent = mealTags;
  //   recipeCategory.textContent = mealCategory;
  //   recipeArea.textContent = mealArea;
  recipeIngMe.innerHTML = `
  <li class="list-group-item text-capitalize">${mealIngredients.i1}: ${mealMeasurements.m1}</li>
  <li class="list-group-item text-capitalize">${mealIngredients.i2}: ${mealMeasurements.m2}</li>
  <li class="list-group-item text-capitalize">${mealIngredients.i3}: ${mealMeasurements.m3}</li>
  <li class="list-group-item text-capitalize">${mealIngredients.i4}: ${mealMeasurements.m4}</li>
  <li class="list-group-item text-capitalize">${mealIngredients.i5}: ${mealMeasurements.m5}</li>
  <li class="list-group-item text-capitalize">${mealIngredients.i6}: ${mealMeasurements.m6}</li>
  <li class="list-group-item text-capitalize">${mealIngredients.i7}: ${mealMeasurements.m7}</li>
  <li class="list-group-item text-capitalize">${mealIngredients.i8}: ${mealMeasurements.m8}</li>
  `;
  recipeInstructions.innerHTML = mealInstructions;
};

fetchRecipe();

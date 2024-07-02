const dishName = document.querySelector("#dishName");
const instruction = document.querySelector("#instruction");
const ingredients = document.querySelector("#ingredients");

const helloWorld = async () => {
  const apiResponse = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );
  //   console.log(apiResponse)
  const jsonParsed = await apiResponse.json();
  const result = jsonParsed.meals[0];
  dishName.textContent = result.strMeal;
  instruction.textContent = result.strInstructions;

  const recipeIngredients = {
    i1: result.strIngredient1,
    i2: result.strIngredient2,
    i3: result.strIngredient3,
    i4: result.strIngredient4,
  };
  //   console.log(ingredients)
  ingredients.innerHTML = `
  <li class="list-group-item text-capitalize">${recipeIngredients.i1}</li>
  <li class="list-group-item text-capitalize">${recipeIngredients.i2}</li>
  <li class="list-group-item text-capitalize">${recipeIngredients.i3}</li>
  <li class="list-group-item text-capitalize">${recipeIngredients.i4}</li>
  
  `;
};

helloWorld();

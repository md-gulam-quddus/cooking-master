const searchBtn = document.getElementById("searchItem");

searchBtn.addEventListener("click", () => {
  const foodCategory = document.getElementById("category").value;
  searchCategory(foodCategory);
});

const searchCategory = (category) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
    .then((res) => res.json())
    .then((data) => {
      const categoryItem = data.meals;
      categoryItem.forEach((element) => {
        showCategorItem(element);
      });
    });
};

const showCategorItem = (categoryItem) => {
  const allCategoryDiv = document.getElementById("allCategory");
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "categoryDiv";
  categoryDiv.innerHTML = `
    <div class="singleItem">
    <img src="${categoryItem.strMealThumb}"/>
    <a onclick="showDetails('${categoryItem.strMeal}')" href="#">${categoryItem.strMeal}</a>
    </div>
    
  `;
  allCategoryDiv.appendChild(categoryDiv);
};

const showDetails = (item) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderMealInfo(data.meals[0]));
};

const renderMealInfo = (item) => {
  console.log(item.strMealstrMeal);
  const mealDiv = document.getElementById("mealInfoDiv");
  mealDiv.innerHTML = `
    <div class="singleItemDetails">
    <img src="${item.strMealThumb}"/>
    <h1>${item.strMeal}</h1>
    <ul> 
    <li>${item.strIngredient1}  ${item.strMeasure1}</li>
    <li>${item.strIngredient2}  ${item.strMeasure2}</li>
    <li>${item.strIngredient3}  ${item.strMeasure3}</li>
    <li>${item.strIngredient4}  ${item.strMeasure4}</li>
    <li>${item.strIngredient5}  ${item.strMeasure5}</li>
    <li>${item.strIngredient6}  ${item.strMeasure6}</li>
    <li>${item.strIngredient7}  ${item.strMeasure7}</li>
    <li>${item.strIngredient8}  ${item.strMeasure8}</li>
    <li>${item.strIngredient9}  ${item.strMeasure9}</li>
    <li>${item.strIngredient10}  ${item.strMeasure10}</li>
    <li>${item.strIngredient11}  ${item.strMeasure11}</li>
    <li>${item.strIngredient12}  ${item.strMeasure12}</li>
    <li>${item.strIngredient13}  ${item.strMeasure13}</li>
    <li>${item.strIngredient14}  ${item.strMeasure14}</li>
    </ul>
    <div>

  `;
};

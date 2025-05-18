const searchbox = document.querySelector(".searchbox");
const searchbtn = document.querySelector(".searchbtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");

/*Funtion to get recipes*/
const fetchrecipe = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes.. </h2>"
    try{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    //  console.log(response.meals[0]);

    recipeContainer.innerHTML= "";
      response.meals.forEach (meal => {
        const recipediv = document.createElement('div');
        recipediv.classList.add('recipe');
        recipediv.innerHTML = `
        <img src = "${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strCategory}</span> Dish</p>
        <p>Belongs to <span>${meal.strArea}</span> Category</p>

        `
        const button = document.createElement('Button');
        button.textContent = "View Recipe";
        recipeContainer.appendChild(recipediv);
         recipediv.appendChild(button);

        //  Add Eventlistener to recipe button
        button.addEventListener("click", ()=> {
           openRecipePopup(meal);
        });

      });
      } catch(e){
  recipeContainer.innerHTML = `<h2>Error in Fetching Recipes.. </h2><br> ${e}`
}
};

//Function to fetch ingredents  and measurements , openRecipepopup
const fetchIngredients = (meal) =>{
 let ingredientslist = "";
 for(let i=1 ; i<=20; i++){
  const ingredient = meal[`strIngredient${i}`];
  if(ingredient){
    const measure = meal[`strMeasure${i}`];
    ingredientslist += `<li>${measure} ${ingredient}</li>`
    
  }
 }
 return ingredientslist;
};

//when we click  view recipe btn the openrecipepopup() called
const openRecipePopup = (meal) => {
  recipeDetailsContent.innerHTML=`
  <h2 class="recipeName">${meal.strMeal}</h2>
  <h3>Ingredients:</h3>
  <ul class="ingredientlist">${fetchIngredients(meal)}</ul>
      <div>
          <h3>Instructions</h3>
          <p class="recipeInstructions">${meal.strInstructions}</p>
      </div>`
  
  recipeDetailsContent.parentElement.style.display = "block";
};

// close button 
recipeCloseBtn.addEventListener("click",() =>{
  recipeDetailsContent.parentElement.style.display = "none";
});

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchinput = searchbox.value.trim();
     if(!searchinput){
    recipeContainer.innerHTML  = `<h2>Type the meal in the search box. </h2> `
    return ;
     }
    fetchrecipe(searchinput);//searchinput convert into a query in fetchrecipe funtion me
});





























/*
shortcuts 
     response.meals.forEach (meal => {
        console.log(meal);
      });*/

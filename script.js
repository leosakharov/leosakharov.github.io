
const recipes = [
  { 
    name: "Aperol Spritz", 
    recipe: "5cl Aperol or Campari. 6cl Cava, Soda water",
    garnish: "1 Slice of orange",
    procedure: "Fill the glass with ice and a single slice of orange. Add Aperol then Proseco Cava. Top off with soda. Stir with short straw and serve.",
    isPopular: true
  },
  { 
    name: "Amaretto Sour", 
    recipe: "4cl Amaretto. 2cl Lemon juice. 1,5cl Frothee. 1cl Simple syrup. 2 Dashes of Angostura",
    garnish: "Dry fruit & Amarena Cherry",
    procedure: "Add all the ingredients into a shaker. Shake and pour it into a sour glass. Add the garnish and serve"
  },
  { 
    name: "Black Russian", 
    recipe: "4cl Vodka, 2cl Kahlua",
    garnish: "",
    procedure: "Add full ice to a samll glass. Pour Kahlua then Vodka. Stir and serve"
  },
  { 
    name: "Bloody Mary", 
    recipe: "9 Sprinkles of pepper. 4 Dashes of Worchestershire Sauce. 2 Dashes of Tabasco. 3 Sprinkles of celery salt. 6cl Tomato juice. 5cl Vodka. 2cl Lemon juice",
    garnish: "1 Slice of lemon. 1 celery-stick.",
    procedure: "Add all ingredients to a shaker. Add ice then mix them slowly. Dip the rime of the glass in Celery salt. Fill with ice. Strain the mix into the glass. Add garnish and serve"
  },
  { 
    name: "Boulevardier", 
    recipe: "3cl Bourbon. 3cl Martini Rosso. 3cl Campari. 1cl Orange juice",
    garnish: "1 Slice of Orange",
    procedure: "Stir all ingredients in a mixing glass full of ice. Pour the ingredients into a cocktail glass with a big ice-cube. Garnish with an orange slice and serve"
  },
  { 
    name: "Caipirinha", 
    recipe: "2 Spoons of brown sugar. Half a lime (in cubes). 1,5cl Lime syrup. 5cl Cachaca",
    garnish: "1 Slice of lime",
    procedure: "Muddle the lime with the sugar and lime syrup in the glass. Fill half the glass with crushed ice. Pour Cachaça and mix well. Fill the glass with crushed ice and garnish. Serve"
  },
  { 
    name: "Charlie Chaplin", 
    recipe: "3cl Lime juice. 3cl Apricot Brandy. 3cl Sloe Gin",
    garnish: "Rosemary (herbs) or candy",
    procedure: "Shake the ingredients in the shaker. Pour into a sour glass. Add garnish and serve"
  },
  { 
    name: "Cherry Rum Sour", 
    recipe: "4cl Havana Especial. 2cl Lemon juice. 1,5cl Egg White. 1cl Simple syrup. 2 fresh cherries",
    garnish: "1 Amarena Cherry",
    procedure: "Muddle the cherries in the Shaker. Add the ingredients and shake. Pour the foamy mix into a glass full of ice. Garnish with cherry and serve"
  },
  { 
    name: "Cosmopolitan", 
    recipe: "2cl Lime juice. 6cl Cranberry juice. 4cl Vodka. 2cl Cointreau. 1cl Simple syrup",
    garnish: "Thin cylinder of lime or dry lime",
    procedure: "Add ingredients into the shaker. Shake and pour the mix into a Martini glass. Garnish with a thin cylinder of dry lime and serve.",
    isPopular: true
  },
  { 
    name: "Cuba Libre", 
    recipe: "&frac14; Lime juice. 4cl Havana 3Y. Pepsi",
    garnish: "2 Lime wedges",
    procedure: "Squeeze quarter of lime in the glass. Fill the glass with ice. Add rum and coke. Garnish with a lime wedge and serve."
  },
  { 
    name: "Dark and stormy", 
    recipe: "&frac14; lime juice. Ginger Beer. 4 cl Dark Rum (Gosling). 2 Dashes of Angostura",
    garnish: "",
    procedure: "Squeeze quarter lime in the glass. Fill with ice. Pour ginger beer till “two fingers” from the top. Add Rum and 2 dashes of angostura. Serve",
    isPopular: true
  },
  { 
    name: "Dry Martini", 
    recipe: "1cl Extra Dry Martini. 5cl of Gin",
    garnish: "3 Olives on a long toothpick",
    procedure: "Pour ingredients into a mixing glass and stir with ice cubes. Pour the mix into a Martini glass. Garnish with olives and serve"
  },
  { 
    name: "Espresso Martini", 
    recipe: "1 Shot of Espresso (3cl). 4cl Vodka. 2cl Kahlua. 0,5cl Cointreau. 1cl Simple Syrup",
    garnish: "3 Coffee beans",
    procedure: "Add ingredients in a shaker and shake well. Strain the foamy mix into the glass. Garnish with 3 Coffee Beans and serve",
    isPopular: true
  },
  { 
    name: "Gin Basil", 
    recipe: "Basil. 1 Spoon of sugar. &frac14; Lime. 4cl Gin. 2cl Lemon juice. 1cl Lime syrup. 1cl Simple syrup",
    garnish: "1 Leaf of basil",
    procedure: "Muddle basil, sugar and lime juice in a shaker. Add ingredients and shake well. Double strain the mix. Add a leaf of Basil and serve",
    isPopular: true
  },
  { 
    name: "Gin Sour", 
    recipe: "4cl Gin. 2cl Lemon juice. 1,5cl Egg white. 1cl Simple syrup",
    garnish: "Dry lemon",
    procedure: "Add all the ingredients in a shaker and shake. Pour it into a sour glass. Garnish with thin lemon slice and serve"
  },
  { 
    name: "Godfather", 
    recipe: "4cl Bourbon. 2cl Amaretto. 1cl Orange juice. 2 Dashes of Angostura",
    garnish: "1 Amarena Cherry",
    procedure: "Add ingredients into a mixing glass and stir well. Add a big ice cube into cocktail glass. Pour the ingredients into the glass. Garnish with Amarena Cherry and serve"
  },
  { 
    name: "Manhattan", 
    recipe: "4cl Bourbon. 2cl Martini Rosso. 2 Drops of Orange Bitters",
    garnish: "Amarena Cherry",
    procedure: "Add the ingredients into a mixing glass with ice and stir well. Squeeze and orange peel into the Martini glass rim. Pour the mix into the glass. Garnish with Amarena Cherry on long toothpick",
    isPopular: true
  },
  { 
    name: "Margarita", 
    recipe: "5cl Tequila. 2cl Cointreau. 2cl Lime juice. 1cl Lime syrup",
    garnish: "1 Dry lime",
    procedure: "Add ingredients into a shaker and shake well. Dip the rim of a sour glass in lime then salt. Pour the mix into the glass and garnish with dry Lime"
  },
  { 
    name: "Mezcal Margarita", 
    recipe: "5cl Mezcal. 2cl Cointreau. 2cl Lime juice. 1cl Lime syrup",
    garnish: "1 Slice of lime or dry lime",
    procedure: "Add ingredients into a shaker and shake well. Dip the rim of a sour glass in lime then Tajin-mix. Pour the mix into the glass and garnish with Lime cylinder"
  },
  { 
    name: "Mezcal Carre", 
    recipe: "1 Smashed Amarena Cherry or 2 fresh cherries. 4cl Mezcal. 2cl Lemon juice. 2cl Triple Sec",
    garnish: "1 Amarena Cherry or 1 fresh cherry",
    procedure: "Add all ingredients into a shaker and shake (Muddle cherries first if using cherries). Double strain the mix into a cocktail glass. Garnish with Maraschino or fresh cherry and serve"
  },
  { 
    name: "Mezcal Mule", 
    recipe: "2 pieces of ginger. Half a spoon of brown sugar. &frac14; lime juice. 4cl Mezcal. 2cl Lemon juice. 1cl Lime syrup. 1cl Simple syrup. Ginger beer",
    garnish: "Slice of Orange",
    procedure: "Muddle ginger and sugar in the shaker. Add ingredients into the shaker. Mix well. Pour the mix into a cocktail glass full of ice. Add Ginger Beer. Garnish with orange slice and Serve"
  },
  { 
    name: "Mojito", 
    recipe: "6 Lime cubes. 2 Spoons of brown sugar. 8 Leaves of mint. 4cl Havana 3Y. 1cl Lime syrup. Soda",
    garnish: "Mint top. 1 Lime cube. 2 Sprays of Angostura",
    procedure: "Hard muddle 4 wedges of lime with 2 spoons of sugar in Mojito glass. Add 8 leaves of mint and muddle lightly. Fill half the glass with ice. Pour Rum and lime syrup and stir using napkins to cover glass top. Add dash of soda. Garnish with lime, mint-top and Angostura. Serve",
    isPopular: true
  },
  { 
    name: "Moscow Mule", 
    recipe: "2 Pieces of ginger. Half a spoon of brown sugar. &frac14; Lime juice. 4cl Vodka. 2cl Lemon juice. 1cl Lime syrup. 1cl Simple syrup. 5 Dashes of Angostura. Ginger beer",
    garnish: "Slice of cucumber. 2 Dashes of Angostura",
    procedure: "Muddle ginger and sugar in the shaker. Add ingredients into the shaker. Mix well. Pour the mix into a cocktail glass half of ice. Add GingerBeer. Garnish with cucumber slice and Serve",
    isPopular: true
  },
  { 
    name: "Mezcal Paloma", 
    recipe: "5cl Mezcal. 5cl Grapefruit. 3cl Lemon juice. 2cl Simple syrup",
    garnish: "1 Slice of grapefruit",
    procedure: "Add all ingredients into a shaker and shake well. Dip a cocktail glass into grapefruit then Tajin- mix. Pour the mix into the glass with a big Ice-cube and serve"
  },
  { 
    name: "Negroni", 
    recipe: "3cl Gin. 3cl Martini Rosso. 3cl Campari. 2 Dashes of Angostura orange",
    garnish: "1 Slice of dry orange or peel",
    procedure: "Stir all ingredients in a mixing glass full of ice. Pour the ingredients into a cocktail glass with a big ice-cube. Garnish with orange slice and serve",
    isPopular: true
  },
  { 
    name: "Old Fashioned", 
    recipe: "2 cubes of white sugar. 5 Dashes Angostura. 5cl Rye Whiskey",
    garnish: "Peel of Orange and a Amarena Cherry. NB: Less sugar if made with Bourbon",
    procedure: "Muddle sugar with dash of sparkling water and angostura in an old fashioned glass. Add a big ice cube and pour the whiskey. Stir until sugar dissolves totally. Peel orange skin and squeeze into the glass rim. Garnish with the orange peel and a Maraschino cherry. Serve",
    isPopular: true
  },
  { 
    name: "Pisco Sour", 
    recipe: "2cl Lime juice. 4cl Pisco. 1,5cl Egg white. 1cl Simple syrup. 0,5 Cointreau",
    garnish: "3 drops of Angostura. Dry lime",
    procedure: "Add ingredients into the shaker and shake well. Pour the foamy mix into a sour glass. Spray the foamy top with Angostura. Serve",
    isPopular: true
  },
  { 
    name: "Rum Sour", 
    recipe: "4cl White Rum. 2cl Lemon juice. 1,5cl Egg white. 1cl Simple syrup. 2 Dashes of Angostura",
    garnish: "Dry fruit & 1 Amarena Cherry",
    procedure: "Add all the ingredients into a shaker and shake. Pour the foamy mix into a sour glass. Garnish with Dry fruit &1 Amarena Cherry and serve"
  },
  { 
    name: "Sazerak", 
    recipe: "2,5cl VS Cognac. 2,5cl Rye Whiskey. 1,5cl Simple syrup. 2 Dashes peychaud bitter. Absinth",
    garnish: "Lemon peel",
    procedure: "Stir all ingredients with ice in a stirring glass. Spray the glass with absinth. Add big ice and pour the ingredients into the glass. Squeeze lemon peel on the glass rim and garnish with the squeezed lemon peel"
  },
  { 
    name: "Salty Dog", 
    recipe: "3cl Gin. 3cl Campari. 4cl Grapefruit",
    garnish: "1 Slice of grapefruit",
    procedure: "Add all the ingredients into a shaker and shake. Dip the cocktail glass into grapefruit then salt. Pour the mix into the glass. Garnish with grapefruit slice and serve"
  },
  { 
    name: "Spagett", 
    recipe: "Bottle of Light beer. 2cl Campari or Aperol. 1cl Lemon juice",
    garnish: "",
    procedure: "Pour the beer into a long beer glass, add Campari or Aperol and lemon juice then serve"
  },
  { 
    name: "Vodka Sour", 
    recipe: "4cl Vodka. 2cl Lemon juice. 1,5cl Egg white. 1cl Simple syrup",
    garnish: "Dry lemon",
    procedure: "Add all the ingredients into a shaker and shake. Pour the foamy mix into a sour glass. Garnish with lemon slice and serve"
  },
  { 
    name: "Whiskey Sour", 
    recipe: "4cl Bourbon. 2cl Lemon juice. 1,5cl Egg white. 1cl Simple syrup. 2 Dashes of Angostura",
    garnish: "Dry fruit & 1 Amarena Cherry",
    procedure: "Add all the ingredients into a shaker and shake. Pour the foamy mix into a sour glass. Garnish with Dry fruit &1 Amarena Cherry and serve.",
    isPopular: true
  },
  { 
    name: "White Russian", 
    recipe: "3cl Kahlua. 4cl Vodka. 4cl Milk",
    garnish: "3 Coffee Beans",
    procedure: "Pour Kahlua into a glass full of ice. Add Vodka and Milk into a shaker and shake well. Pour the mix slowly into the glass of Kahlua and ice so it creates two layers. Garnish with 3 coffee beans and serve.",
    isPopular: true
  },
  { 
    name: "Christmas time Glogg", 
    recipe: "8 Cloves. 5 Dashes of cinnamon. 5 Scratches of Nutmeg. 2cl Sugar Syrup. 1,5cl Dark Rum. 1cl Orange Juice. 1 glass of Red Wine. 2 Spoonfuls of Raisins and Almondslivers",
    garnish: "",
    procedure: "Add Cloves, Cinnamon and Nutmeg to a coffee canister. Then add the rest of the ingredient. Steam the mix using the coffee machine steamer. Pour it into wine glass using a strainer. Add Raisins and Almond slivers. Serve with a spoon"
  },
  { 
    name: "Irish Coffee", 
    recipe: "1 Americano. 4cl Whiskey (Bushmills). 1cl Irish cream. Whip Cream. Brown sugar. Brown sugar Stick",
    garnish: "",
    procedure: "Prepare an americano with less water in Irish coffee glass, Add irish cream and whiskey. Add whip cream and sprinkle Brown sugar. Place a sugarstick on the saucer and serve"
  },
];

let currentRecipeIndex = -1;

document.getElementById('menu-button').addEventListener('click', function() {
  var menu = document.getElementById('recipe-menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
  } else {
      menu.style.display = 'none';
  }
});


document.addEventListener('keydown', function(event) {
  if (event.key === 'Space' || event.code === 'Space') {
      // Flip the current card
      const cardInner = document.querySelector('.card-inner');
      if (cardInner) {
          const isFlipped = cardInner.style.transform === 'rotateY(180deg)';
          cardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
      }
  } else if (event.key === 'Enter' || event.code === 'Enter') {
      // Display a new random recipe
      currentRecipeIndex = getNextRandomRecipeIndex();
      displayRecipe(currentRecipeIndex);
  }
});

function createRecipeMenu() {
    const menu = document.getElementById('recipe-menu');
    recipes.forEach((recipe, index) => {
        const button = document.createElement('button');
        button.textContent = recipe.name;
        button.onclick = () => {
            displayRecipe(index);
            menu.style.display = 'none'; // Close menu after selection
        };
        menu.appendChild(button);
    });
}

function displayRecipe(index) {
  const recipe = recipes[index];
  const ingredients = recipe.recipe.split('.').map(ingredient => `<li>${ingredient}</li>`).join('');
  const garnish = recipe.garnish.split('.').map(garnish => `<li>${garnish}</li>`).join('');
  const procedureSteps = recipe.procedure.split('.').map(step => step.trim()).filter(step => step).map(step => `<li>${step}.</li>`).join('');

  // Create a friendly file name for the image based on the recipe name
  const imageName = recipe.name + '.jpg';

  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = `
      <div class="card-inner" onclick="flipCard()">
          <div class="card-front">
              <h2>${recipe.name}</h2>
              <img src="./${imageName}" alt="${recipe.name}" style="height: 300px; width: 300px; max-width: 100%; height: auto; display: block; margin: 10px auto; border-radius: 10px;">
          </div>
          <div class="card-back">
              <h2>${recipe.name}</h2>
              <strong>Ingredients:</strong>
              <ul>${ingredients}</ul>
              <strong>Garnish:</strong>
              <ul>${garnish}</ul>
              <strong>Procedure:</strong>
              <ol>${procedureSteps}</ol>
          </div>
      </div>
  `;
}

function flipCard() {
  const cardInner = document.querySelector('.card-inner');
  if (cardInner) {
      const isFlipped = cardInner.style.transform === 'rotateY(180deg)';
      cardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
  }
}

function getNextRandomRecipeIndex() {
  let nextIndex;
  do {
      nextIndex = Math.floor(Math.random() * recipes.length);
  } while (nextIndex === currentRecipeIndex);
  currentRecipeIndex = nextIndex;  // Update the global index
  return nextIndex;
}

document.getElementById('continue-button').addEventListener('click', function() {
    let introPage = document.getElementById('intro-page');
    let cardFlip = document.getElementById('card-flip');

    if (introPage.style.display === 'none') {
        introPage.style.display = 'block';
        cardFlip.style.display = 'none';
    } else {
        introPage.style.display = 'none';
        cardFlip.style.display = 'block';
    }
});

document.getElementById('go-back').addEventListener('click', function() {
    document.getElementById('intro-page').style.display = 'flex';
    document.getElementById('card-flip').style.display = 'none';
});

// Function to handle view toggling between the intro page and the card flip page
function toggleViews() {
  let introPage = document.getElementById('intro-page');
  let cardFlip = document.getElementById('card-flip');

  if (introPage.style.display === 'none') {
      introPage.style.display = 'block';
      cardFlip.style.display = 'none';
  } else {
      introPage.style.display = 'none';
      cardFlip.style.display = 'block';
      currentRecipeIndex = getNextRandomRecipeIndex();
      displayRecipe(currentRecipeIndex);
  }
}

function setupTouchEvents() {
  let startX = 0;
  let startTime = 0;

  document.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      startTime = new Date().getTime();
  }, false);

  document.addEventListener('touchmove', function(e) {
      e.preventDefault();  // This might be needed to prevent scrolling
  }, false);

  document.addEventListener('touchend', function(e) {
      let endX = e.changedTouches[0].clientX;
      let endTime = new Date().getTime();
      handleSwipe(startX, endX, startTime, endTime);
  }, false);
}

function handleSwipe(startX, endX, startTime, endTime) {
  let deltaX = endX - startX;
  let deltaTime = endTime - startTime;
  if (deltaTime < 500) {  // Ensure a quick swipe
      if (Math.abs(deltaX) > 50) {
          if (deltaX < 0) {
              // Left swipe
              displayRandomRecipe();
          }
      }
  }
}

setupTouchEvents();

if (typeof DeviceMotionEvent.requestPermission === 'function') {
  // Handle iOS 13+ devices
  DeviceMotionEvent.requestPermission()
      .then(response => {
          if (response == 'granted') {
              window.addEventListener('devicemotion', handleDeviceMotion);
          }
      })
      .catch(console.error);
} else {
  // Non-iOS 13+ devices
  window.addEventListener('devicemotion', handleDeviceMotion);
}

function handleDeviceMotion(event) {
  let threshold = 15;
  let x = event.accelerationIncludingGravity.x;
  let y = event.accelerationIncludingGravity.y;
  let z = event.accelerationIncludingGravity.z;

  if (Math.abs(x) > threshold || Math.abs(y) > threshold || Math.abs(z) > threshold) {
      displayRandomRecipe();
  }
}


window.onload = () => {
    createRecipeMenu();
    currentRecipeIndex = getNextRandomRecipeIndex();
    displayRecipe(currentRecipeIndex);
};




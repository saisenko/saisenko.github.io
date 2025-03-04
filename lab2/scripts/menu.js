let menu = [
    {
        "img": "../lab1/img/food/beef-rossini.jpg",
        "name": "Beef Rossini",
        "price": "\$5.00",
        "ingredients": ["Beef tournedos", "Foie gras", "Black truffle", "Madeira sauce"]
    },
    {
        "img": "../lab1/img/food/chicken-alfredo.jpg",
        "name": "Chicken Alfredo",
        "price": "\$7.00",
        "ingredients": ["Chicken", "Alfredo sauce", "Pasta", "Parmesan cheese"]
    },
    {
        "img": "../lab1/img/food/veggie-delight.jpg",
        "name": "Veggie Delight",
        "price": "\$3.50",
        "ingredients": ["Mixed vegetables", "Tofu", "Soy sauce", "Rice"]
    },
];

/**
 * Fill in the menu table with data from menu array
 */
const fillMenu = () => {
    const table = document.querySelector("table.menu");

    menu.forEach(element => {
        // create table row and assign class "menu-dish"
        const row = document.createElement("tr");
        row.classList.add("menu-dish");

        // create image section and load data into it
        const imgSection = document.createElement("td");
        imgSection.classList.add("menu-dish--img");
        const img = document.createElement("img");
        img.src = element.img;
        img.alt = element.name;
        imgSection.appendChild(img);
        row.appendChild(imgSection);

        // create name section and load data into it
        const nameSection = document.createElement("td");
        nameSection.classList.add("menu-dish--name");
        nameSection.textContent = element.name;
        row.appendChild(nameSection);

        // create price section and load data into it
        const priceSection = document.createElement("td");
        priceSection.classList.add("menu-dish--price");
        priceSection.textContent = element.price;
        row.appendChild(priceSection);

        // create ingredients section with a button
        const ingredientSection = document.createElement("td");
        ingredientSection.classList.add("menu-dish--ingredients");
        const ingredientsBtn = document.createElement("button");
        ingredientsBtn.classList.add("menu-dish--btn");
        ingredientsBtn.textContent = "Ingredients";
        ingredientsBtn.addEventListener("click", () => {
            ingredientList.classList.toggle("hidden");
        });
        ingredientSection.appendChild(ingredientsBtn);

        const ingredientList = document.createElement("ul");
        ingredientList.classList.add("hidden");
        element.ingredients.forEach(item => {
            const ingredient = document.createElement("li");
            ingredient.textContent = item;
            ingredientList.appendChild(ingredient);
        });
        ingredientSection.appendChild(ingredientList);

        row.appendChild(ingredientSection);

        // add the row to table
        table.appendChild(row);
    });
};

/**
 * Display the ingredient after user presses
 * the "Ingredients" button
 */
const displayIngredients = () => {

};

window.onload = () => {
    fillMenu();
}
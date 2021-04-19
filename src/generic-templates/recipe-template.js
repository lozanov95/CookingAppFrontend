import { html } from '../../node_modules/lit-html/lit-html.js';

export const recipesTemplate = (recipes) => html `
<div class="card-container">
    ${recipes.map(recipeCard)}
</div>
`;

const recipeCard = (recipe) => html `
<div class="card">
    <h3 class="card-title">${recipe.name}</h3>
    <img class="card-image" src="${recipe.image_url}">
    <div class="card-footer-space-between">
        <span>Difficulty: ${recipe.difficulty} </span><a href=${`/details/${recipe.id}`} class="card-btn">View</a>
    </div>
</div>
`
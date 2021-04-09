import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecipeById } from '../api/data.js';

const detailsTemplate = (recipe) => html `
<div class="details-section">
        <div>
            <h3 class="card-title">${recipe.name}</h3>
        </div>
        <img class="details-image" src=${recipe.image_url}>
        <div >
            <p class="card-section-title"> Difficulty </p>
            <p class="card-section">${recipe.difficulty}</p>
        </div>
        <div >
            <p class="card-section-title"> Ingredients</p>
            <p class="card-section"> ${recipe.ingredients}</p>
        </div>
        <div >
            <p class="card-section-title">Preparation steps</p>
            <p class="card-section">${recipe.preparation_steps}</p>
        </div>
        <div class=".card-footer-space-between">            
                <a href='/recipes' class="btn card-btn">Back</a>   
                <a  href=${`/edit/${recipe.id}`} class="btn card-btn">Edit</a>
                <a href=${`/delete/${recipe.id}`} class="btn card-btn">Delete</a>            
        </div>
</div>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const recipe = await getRecipeById(id);
    ctx.render(detailsTemplate(recipe));

}
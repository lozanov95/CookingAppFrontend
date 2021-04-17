import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecipeById, editRecipe } from '../api/data.js';

const editTemplate = (recipe, onSubmit) => html `
    <div class="input-section">
        <form class="input-form" @submit=${onSubmit}>
            <div>
                <label>Name:</label>
                <input class="input-field" type="text" name="name" placeholder="Enter the name of the recipe" .value=${recipe.name}>
            </div>
            <div>
                <label>Difficulty:</label>
                <select name="difficulty" .value=${recipe.difficulty}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea name="ingredients" id="" cols="30" rows="10" placeholder="Enter the needed ingredients for the recipe" .value=${recipe.ingredients}></textarea>
            </div>
            <div>
                <label>Preparation steps:</label>
                <textarea name="preparation_steps" id="" cols="30" rows="10" placeholder="Enter the preparation steps for the recipe" .value=${recipe.preparation_steps}></textarea>
            </div>
            <div>
                <label>Image URL:</label>
                <input class="input-field" type="text" name="image_url" .value=${recipe.image_url}>
            </div>
            <button type="submit" class="input-button">Submit changes</button>
        </form>
    </div>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const recipe = await getRecipeById(id);
    ctx.render(editTemplate(recipe, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const data = {
            name: formData.get('name'),
            difficulty: formData.get('difficulty'),
            ingredients: formData.get('ingredients'),
            preparation_steps: formData.get('preparation_steps'),
            image_url: formData.get('image_url')
        }

        await editRecipe(id, data);
        ctx.page.redirect('/details/' + id);

    }
}
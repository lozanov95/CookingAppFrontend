import { html } from '../../node_modules/lit-html/lit-html.js'
import { createRecipe } from '../api/data.js';

const createTemplate = (onSubmit) => html `
    <div class="input-section">
        <form class="input-form" @submit=${onSubmit}>
            <div>
                <label>Name:</label>
                <input class="input-field" type="text" name="name" id="" placeholder="Enter the name of the recipe">
            </div>
            <div>
                <label>Difficulty:</label>
                <select name="difficulty">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea name="ingredients" id="" cols="30" rows="10" placeholder="Enter the needed ingredients for the recipe" name=></textarea>
            </div>
            <div>
                <label>Preparation steps:</label>
                <textarea name="preparation_steps" id="" cols="30" rows="10" placeholder="Enter the preparation steps for the recipe"></textarea>
            </div>
            <div>
                <label>Image URL:</label>
                <input class="input-field" type="text" name="image_url">
            </div>
            <button type="submit" class="input-button">Create</button>
        </form>
    </div>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

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

        try {
            await createRecipe(data);
            ctx.page.redirect('/recipes')
        } catch (error) {
            window.alert(error.message)
        }
    }
}
import { html } from '../../node_modules/lit-html/lit-html.js'
import { createRecipe } from '../api/data.js';

const createTemplate = (onSubmit) => html `
       <div class="container" id="createRecipe">
            <form @submit=${onSubmit}>
                <div class="row">
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text" name="name" id="" placeholder="Enter the name of the recipe">
                </div>
                <div class="row">
                    <label class="form-label">Difficulty:</label>
                    <select class="form-control" name="difficulty">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div class="row">
                    <label class="form-label">Ingredients:</label>
                    <textarea class="form-control" name="ingredients" id="" cols="30" rows="10" placeholder="Enter the needed ingredients for the recipe" name=></textarea>
                </div>
                <div class="row">
                    <label class="form-label">Preparation steps:</label>
                    <textarea class="form-control" name="preparation_steps" id="" cols="30" rows="10" placeholder="Enter the preparation steps for the recipe"></textarea>
                </div>
                <div class="row">
                    <label class="form-label">Image URL:</label>
                    <input class="form-control" type="text" name="image_url">
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
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

        await createRecipe(data);
        ctx.page.redirect('/recipes')
    }
}
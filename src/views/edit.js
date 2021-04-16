import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecipeById, editRecipe } from '../api/data.js';

const editTemplate = (recipe, onSubmit) => html `
<div class="container" id="createRecipe">
     <form @submit=${onSubmit}>
         <div class="row">
             <label class="form-label">Name:</label>
             <input class="form-control" type="text" name="name" placeholder="Enter the name of the recipe" .value=${recipe.name}>
         </div>
         <div class="row">
             <label class="form-label">Difficulty:</label>
             <select class="form-control" name="difficulty" .value=${recipe.difficulty}>
                 <option value="Easy">Easy</option>
                 <option value="Medium">Medium</option>
                 <option value="Hard">Hard</option>
             </select>
         </div>
         <div class="row">
             <label class="form-label">Ingredients:</label>
             <textarea class="form-control" name="ingredients" id="" cols="30" rows="10" placeholder="Enter the needed ingredients for the recipe" .value=${recipe.ingredients}></textarea>
         </div>
         <div class="row">
             <label class="form-label">Preparation steps:</label>
             <textarea class="form-control" name="preparation_steps" id="" cols="30" rows="10" placeholder="Enter the preparation steps for the recipe" .value=${recipe.preparation_steps}></textarea>
         </div>
         <div class="row">
             <label class="form-label">Image URL:</label>
             <input class="form-control" type="text" name="image_url" .value=${recipe.image_url}>
         </div>
         <button type="submit" class="btn btn-primary">Submit changes</button>
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
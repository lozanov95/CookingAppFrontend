import { recipesTemplate } from '../generic-templates/recipe-template.js';
import { getRecipesByCreatorID } from '../api/data.js';

export async function myRecipesPage(ctx) {
    const userId = sessionStorage.getItem('user_id');
    const recipes = await getRecipesByCreatorID(userId);
    ctx.render(recipesTemplate(recipes));
}
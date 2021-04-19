import { getRecipes } from '../api/data.js';
import { recipesTemplate } from '../generic-templates/recipe-template.js';

export async function recipesPage(ctx) {
    const recipes = await getRecipes();
    ctx.render(recipesTemplate(recipes));
}
import { deleteRecipe } from '../api/data.js'

export async function deletePage(ctx) {
    const id = ctx.params.id;
    if (confirm('Are you sure that you want to delete this recipe?')) {
        await deleteRecipe(id)
        ctx.page.redirect('/recipes')
    } else {
        ctx.page.redirect('/details/' + id);
    }
}
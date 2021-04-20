import { html } from '../../node_modules/lit-html/lit-html.js';
import { commentsTemplate } from '../generic-templates/comment-template.js';
import { getRecipeById, postComment, getComments } from '../api/data.js';

const detailsTemplate = (recipe, onSubmit) => html `
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
        <div class="card-footer-space-between">     
            <ul>
                <a href='/recipes' class="card-btn">Back</a>                   
            </ul> 
            ${recipe.creator_id == sessionStorage.getItem('user_id') ? html`<ul>                    
                <a href=${`/edit/${recipe.id}`} class="card-btn">Edit</a>  
                <a href=${`/delete/${recipe.id}`} class="card-btn">Delete</a>   
            </ul>` : ''}    
        </div>
    </div>
    ${commentsTemplate(recipe.comments, onSubmit)}
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const recipe = await getRecipeById(id);
    ctx.render(detailsTemplate(recipe, onSubmit));

    async function onSubmit(ev){
        ev.preventDefault()
        const formData = new FormData(ev.target);
        const content = formData.get('content').trim();
        await postComment(id, content); 
        const comments = await getComments(id);
        ctx.render(commentsTemplate(comments, onSubmit))
    }
}
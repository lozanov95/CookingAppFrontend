import { html } from '../../node_modules/lit-html/lit-html.js';

export const commentsTemplate = (comments, onSubmit) => html `
  <div class="comments-container">
            <h2>Comments:</h2>
            ${comments.length > 0 ? comments.map(commentTemplate): html`<p>There are no comments yet.</p>`}
            ${sessionStorage.getItem('authToken') ? html`
            <form @submit=${onSubmit} class="add-comment">
                <label>Add a comment:</label>
                <input name="content">
                <input class="comment-button" type="submit" value="Post comment">
            </form>
            `:''}            
        </div>
`;

const commentTemplate = (comment) => html `
<div class="comment">
    <h3>${comment.author_id}</h3>
    <p>${comment.content}</p>
</div>
`;
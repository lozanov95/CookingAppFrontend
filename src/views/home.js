import { html } from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html `
  <div class="home-section">
            <h1>Welcome to my cooking app!</h1>
            <p>View all recipes on the following <a href="/recipes">link</a></p>
            <p>Read more about this application <a href="/about">here</a></p>
        </div>`

export async function homePage(ctx) {
    ctx.render(homeTemplate())
}
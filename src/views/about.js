import { html } from '../../node_modules/lit-html/lit-html.js';

const aboutTemplate = () => html `
<div class="about-section">
            <h1>About me</h1>
            <p>I am Vasil Lozanov and this is a simple CRUD app that I developed.</p>
            <p>You can reach me on LinkedIn <a href="https://www.linkedin.com/in/vasil-lozanov-5a1b0a18a/">here</a> or you can email me at <b>vasillozanov1@gmail.com</b> .</p>
            <p>GitHub repo of this application - <a href="https://github.com/lozanov95/CookingAppFrontend">here</a></p>
        </div>
`;

export async function aboutPage(ctx) {
    ctx.render(aboutTemplate());
}
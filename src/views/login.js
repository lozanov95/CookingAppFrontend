import { html } from '../../node_modules/lit-html/lit-html.js';

const loginTemplate = () => html `
    <div class="input-section">
        <form class="input-form">
            <h1>Login</h1>
            <div>
                <label>Username:</label>
                <input class="input-field" type="text" name="username">
            </div>
            <div>
                <label>Password:</label>
                <input class="input-field" type="password" name="password">
            </div>
            <div>
                <input class="input-button" type="button" value="Login">
            </div>
        </form>
    </div>
`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate())
}
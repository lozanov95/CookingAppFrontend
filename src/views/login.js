import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit) => html `
    <div class="input-section">
        <form @submit=${onSubmit} class="input-form">
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
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }
        await login(data);
        ctx.page.redirect('/');
    }
}
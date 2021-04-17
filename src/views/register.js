import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';

const registerTemplate = (onSubmit, errors) => html `
    <div class="input-section">
        <form @submit=${onSubmit} class="input-form">
            <h1>Register</h1>
            <ul class="errors-section">
                ${errors ? errors.map((err)=>html`<p>${err}</p>`):''}
            </ul>
            <div>
                <label>Username:</label>
                <input class="input-field" type="text" name="username">
            </div>
            <div>
                <label>Password:</label>
                <input class="input-field" type="password" name="password">
            </div>
            <div>
                <label>Repeat password:</label>
                <input class="input-field" type="password" name="password2">
            </div>
            <div>
                <label>Email:</label>
                <input class="input-field" type="text" name="email">
            </div>
            <input class="input-button" type="submit" value="Register">
        </form>
    </div>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const password2 = formData.get('password2');
        const email = formData.get('email');

        const errors = [];

        if (username.length < 3) {
            errors.push('The username must be at least 3 characters long!');
        }
        if (password.length < 8) {
            errors.push('The password must be at least 8 characters long, alphanumeric and uncommon!');
        }
        if (password != password2) {
            errors.push('The passwords must match!');
        }
        if (email.length == 0) {
            errors.push('The email field must not be empty!');
        }

        if (errors.length > 0) {
            ctx.render(registerTemplate(onSubmit, errors));
        }

        if(errors.length > 0){
            console.log(errros.length)
            return window.alert('Please verify that all fields are valid!');
        }

        const data = {
            username,
            password,
            email
        }
        try {
            await register(data);
            window.alert('You have been registered successfully! You can now login!');
            ctx.page.redirect('/login');
        } catch (error) {
            console.log(error)
            window.alert('Please verify that all fields are valid!')
        }
    }
}
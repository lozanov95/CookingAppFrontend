import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { logout } from './api/data.js';


import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { recipesPage } from './views/recipes.js';
import { deletePage } from './views/delete.js';
import { detailsPage } from './views/details.js';
import { aboutPage } from './views/about.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myRecipesPage } from './views/myrecipes.js';

const main = document.getElementById('content');

page('/', middleware, homePage);
page('/recipes', middleware, recipesPage);
page('/myrecipes', middleware, myRecipesPage)
page('/create', middleware, createPage);
page('/delete/:id', deletePage);
page('/details/:id', middleware, detailsPage);
page('/edit/:id', middleware, editPage);
page('/about', middleware, aboutPage);
page('/login', middleware, loginPage);
page('/register', middleware, registerPage);
page('/logout', logoutPage);

page.start();

setNav()

function middleware(ctx, next) {
    setNav();
    ctx.render = (content) => render(content, main);
    next();
}

async function logoutPage() {
    await logout();
    page.redirect('/');
}

function setNav() {
    const auth = sessionStorage.getItem('authToken') ? true : false;
    const elementDisplayStyle = 'inline';
    const elementHideStyle = 'none';
    if (auth) {
        document.querySelectorAll('.user').forEach((el) => el.style.display = elementDisplayStyle);
        document.querySelectorAll('.guest').forEach((el) => el.style.display = elementHideStyle);
    } else {
        document.querySelectorAll('.user').forEach((el) => el.style.display = elementHideStyle);
        document.querySelectorAll('.guest').forEach((el) => el.style.display = elementDisplayStyle);
    }
}
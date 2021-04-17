import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { recipesPage } from './views/recipes.js';
import { deletePage } from './views/delete.js';
import { detailsPage } from './views/details.js';
import { aboutPage } from './views/about.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';

const main = document.getElementById('content');

page('/', middleware, homePage);
page('/recipes', middleware, recipesPage);
page('/create', middleware, createPage);
page('/delete/:id', deletePage);
page('/details/:id', middleware, detailsPage);
page('/edit/:id', middleware, editPage);
page('/about', middleware, aboutPage);
page('/login', middleware, loginPage);

page.start();


function middleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
}
import * as api from './api.js'

api.settings.host = 'http://localhost:8000/api';

export async function getRecipes() {
    return await api.get('/recipes');
}

export async function getRecipeById(id) {
    return await api.get(`/recipes/${id}`)
}

export async function deleteRecipe(id) {
    return await api.del(`/recipes/delete/${id}`);
}

export async function createRecipe(data) {
    return await api.post('/recipes/create', data);
}

export async function editRecipe(id, data) {
    return await api.put(`/recipes/edit/${id}`, data);
}
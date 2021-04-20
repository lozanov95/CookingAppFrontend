import * as api from './api.js'

if (api.settings.debug) {
    api.settings.host = 'http://localhost:8000';
} else {
    api.settings.host = 'https://cooking-app-backend-vasil-loz.herokuapp.com'
}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getRecipes() {
    return await api.get('recipes');
}

export async function getRecipeById(id) {
    return await api.get(`recipes/${id}`)
}

export async function deleteRecipe(id) {
    return await api.del(`recipes/delete/${id}`);
}

export async function createRecipe(data) {
    return await api.post('recipes/create', data);
}

export async function editRecipe(id, data) {
    return await api.put(`recipes/edit/${id}`, data);
}

export async function getRecipesByCreatorID(userId) {
    return await api.get(`recipes?creator_id=${userId}`);
}

export async function postComment(recipeId, content) {
    return await api.post(`recipes/${recipeId}/comments`, content);
}

export async function getComments(recipeId) {
    return await api.get(`recipes/${recipeId}/comments`);
}
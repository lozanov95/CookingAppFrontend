export const settings = {
    host: ''
}

async function request(url, options = {}) {
    try {
        const response = await fetch(url, options);
        try {

            const data = await response.json();
            return data;
        } catch (error) {
            return response
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

function setOptions(method = 'get', data) {
    const options = { method }
    const headers = {};
    if (data) {
        headers['Content-Type'] = 'application/json';
        options['body'] = JSON.stringify(data)
        options['headers'] = headers
    }
    return options
}

export async function get(endpoint) {
    return await request(`${settings.host}${endpoint}`, setOptions())
}

export async function del(endpoint) {
    return await request(`${settings.host}${endpoint}`, setOptions('delete'));
}

export async function post(endpoint, data) {
    return await request(`${settings.host}${endpoint}`, setOptions('post', data));
}

export async function put(endpoint, data) {
    return await request(`${settings.host}${endpoint}`, setOptions('put', data));
}
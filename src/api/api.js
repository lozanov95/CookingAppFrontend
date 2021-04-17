export const settings = {
    host: '',
    debug: true
}

async function request(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            return response
        }
    } catch (error) {
        throw new Error(error)
    }
}

function setOptions(method = 'get', data) {
    const options = { method }
    const headers = {};

    const authToken = sessionStorage.getItem('authToken');

    if (authToken) {
        headers['Authorization'] = 'Token ' + authToken;
    }

    if (data) {
        headers['Content-Type'] = 'application/json';
        options['body'] = JSON.stringify(data)
    }

    options['headers'] = headers

    return options
}

export async function get(endpoint) {
    return await request(`${settings.host}/api/${endpoint}`, setOptions())
}

export async function del(endpoint) {
    return await request(`${settings.host}/api/${endpoint}`, setOptions('delete'));
}

export async function post(endpoint, data) {
    return await request(`${settings.host}/api/${endpoint}`, setOptions('post', data));
}

export async function put(endpoint, data) {
    return await request(`${settings.host}/api/${endpoint}`, setOptions('put', data));
}

export async function login(data) {
    const response = await request(`${settings.host}/api/token-auth/login/`, setOptions('post', data));
    const token = response.token;
    if (token) {
        sessionStorage.setItem('authToken', token);
        sessionStorage.setItem('user_id', response.user_id);
        sessionStorage.setItem('username', data.username);
    } else {
        throw new Error(response.non_field_errors);
    }

}
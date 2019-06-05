import { Api } from '../api';

function login(username, password)
{
    const params = {
        username: username,
        password: password
    };

    return Api()
        .post(`/login_check`, params)
        .then(response => {
            if (response.statusText !== "OK") {
                if (response.status === 401) {
                    logout();
                    location.reload();
                }
                const error = response.statusText;
                return Promise.reject(error);
            }

            return response.data;
        })
}

function logout()
{
    localStorage.removeItem('username');
    localStorage.removeItem('token');
}

export const userService = {
    login,
    logout
};

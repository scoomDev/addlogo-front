import { userService } from "../../_services";
import { router } from "../../_helpers";

const username = localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')) : '';
const state = {
    username: username,
    status: {
        logginIn: false
    }
};

const getters = {
    getUsername: state => state.username
};

const actions = {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username });
        userService.login(username, password)
            .then(user => {
                if (user.token) {
                    const data = {
                        username: user.data.username,
                        token: user.token
                    };
                    localStorage.setItem('username', JSON.stringify(data.username));
                    localStorage.setItem('token', JSON.stringify(data.token));
                }
                commit('loginSuccess', user);
                router.push('/');
            }, error => {
                commit('loginFailure', error);
                dispatch('alert/error', error, { root: true });
            })
    },
    logout({commit}) {
        userService.logout();
        commit('logout')
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { logginIn: true };
        state.user = user
    },
    loginSuccess(state, user) {
        state.status = { logginIn: true };
        state.user = user
    },
    loginFailure(state) {
        state.status = {};
        state.user = null
    },
    logout(state) {
        state.status = {};
        state.user = null
    }
};

export const account = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

import { brandLogoService } from "../../_services/brandLogo.service";

const state = {
    brands: {},
    isLoading: false,
    error: false
};

const getters = {
    getBrands: state => state.brands,
    getIsLoading: state => state.loading,
    getError: state => state.error
};

const actions = {
    getAllBrands ({ commit }) {
        commit('getAllBrandsRequest');
        brandLogoService.getAll().then(
            data => commit('getAllBrands', data),
            error => commit('getAllFailure', error)
        ).finally(commit('loadingEnd'))
    }
};

const mutations = {
    getAllBrandsRequest (state) {
        state.loading = true;
    },
    getAllBrands (state, brandLogos) {
        state.brands = brandLogos;
    },
    getAllFailure (state, error) {
        state.error = error;
    },
    loadingEnd(state) {
        state.loading = false;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

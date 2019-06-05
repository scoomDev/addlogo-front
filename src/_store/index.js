import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { alert } from "./modules/alert.module";
import { account } from "./modules/account.module";
import brandLogos from "./modules/brandLogo.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState],
    modules: {
        alert,
        account,
        brandLogos
    }
});

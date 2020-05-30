import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import reservation from "./modules/reservation";
import warningModal from "./modules/warningModal";
import detailModal from "./modules/detailModal";

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
    modules: {
        reservation,
        warningModal,
        detailModal
    },
    strict: debug
});

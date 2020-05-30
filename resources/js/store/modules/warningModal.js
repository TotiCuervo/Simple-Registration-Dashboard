function initialState() {
    return {
        isOpen: false,
        redirect: '',
        loading: false
    }
}

const getters = {
    isOpen(state) {
        return state.isOpen;
    },
    redirect(state) {
        return state.redirect
    },
    loading(state){
        return state.loading;
    },
};

const actions = {

};

const mutations = {
    setLoading(state, loading) {
        state.loading = loading
    },
    SET_OPEN(state, value){
        state.isOpen = value;
    },
    SET_REDIRECT(state, value) {
        state.redirect = value;
    }
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}

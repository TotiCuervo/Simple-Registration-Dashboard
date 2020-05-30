function initialState() {
    return {
        isOpen: false,
        reservation: {
            customerInformation: {
                'firstName': '',
                'lastName': '',
                'email': '',
                'phone': ''
            },
            vehicleInformation: {
                'year': '',
                'make': '',
                'model': ''
            },
            pickupInformation: {
                'street': '',
                'city': '',
                'country': 'United States',
                'state':'',
                'zipcode': '',
                'date': '',
                'time': ''
            }
        },
        loading: false
    }
}

const getters = {
    isOpen(state) {
        return state.isOpen;
    },
    reservation(state) {
        return state.reservation
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
    SET_RESERVATION(state, value) {
        state.reservation = value;
    }
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}

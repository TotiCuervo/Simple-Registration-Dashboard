function initialState() {
    return {
        form: {
            customerInformation: {
                'firstName': '',
                'lastName': '',
                'email': '',
                'phone': ''
            },
            vehicleInformation: {
                'year': '',
                'make': '',
                'model': '',
                'color': '',
                'notes': ''
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
        formPageControl: {
            customerInfo: {
                complete: false,
                current: true,
                name: 'reservation-customer-information'

            },
            vehicleInfo: {
                complete: false,
                current: false,
                name: 'reservation-vehicle-information'

            },
            pickupInfo: {
                complete: false,
                current: false,
                name: 'reservation-pickup-information'

            },
            overview: {
                complete: false,
                current: false,
                name: 'reservation-overview'

            },
        },
        availableVehicles: [],
        availableMakes: [],
        availableYears: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992',],
        availableStates: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
        reservations:[{customerInformation:{'firstName':'Toti','lastName':'Cuervo','email':'cuervor14@gmail.com','phone':'9016924116'},vehicleInformation:{'year':'2011','make':'Toyota','model':'Corolla','color':'White','notes':''},pickupInformation:{'street':'10034 Cameron Ridge Trail','city':'Cordova','country':'United States','state':'Tennessee','zipcode':'38016','date':new Date('Jun 01 2020'),'time':'10:30 AM'},},{customerInformation:{'firstName':'Breanna','lastName':'Owsley','email':'bnowsley@gmail.com','phone':'5555555555'},vehicleInformation:{'year':'2000','make':'Nissan','model':'Versa','color':'Black','notes':''},pickupInformation:{'street':'44 N. Applegate Ave','city':'Hernando','country':'United States','state':'Mississippi','zipcode':'38632','date':new Date('Jun 02 2020'),'time':'2:30 PM'},},{customerInformation:{'firstName':'Elon','lastName':'Musk','email':'elonMusk@tesla.com','phone':'5555555555'},vehicleInformation:{'year':'2020','make':'Telsa','model':'Cybertruck','color':'Silver','notes':'Front glass is shattered'},pickupInformation:{'street':'425 Prospect Rd.','city':'Bethpage','country':'United States','state':'New York','zipcode':'3811','date':new Date('Jun 03 2020'),'time':'11:30 PM'},},{customerInformation:{'firstName':'Jordan','lastName':'Belfort','email':'wolf@wallstreet.com','phone':'5555555555'},vehicleInformation:{'year':'1991','make':'Ferrari','model':'Testarossa','color':'White','notes':'Has racing stripes'},pickupInformation:{'street':'425 Prospect Rd.','city':'Bethpage','country':'United States','state':'New York','zipcode':'3811','date':new Date('Jun 04 2020'),'time':'9:00 AM'},},{customerInformation:{'firstName':'Toti','lastName':'Cuervo','email':'cuervor14@gmail.com','phone':'9016924116'},vehicleInformation:{'year':'2011','make':'Toyota','model':'Corolla','color':'White','notes':''},pickupInformation:{'street':'10034 Cameron Ridge Trail','city':'Cordova','country':'United States','state':'Tennessee','zipcode':'38016','date':new Date('Jun 01 2020'),'time':'10:30 AM'},},{customerInformation:{'firstName':'Breanna','lastName':'Owsley','email':'bnowsley@gmail.com','phone':'5555555555'},vehicleInformation:{'year':'2000','make':'Nissan','model':'Versa','color':'Black','notes':''},pickupInformation:{'street':'44 N. Applegate Ave','city':'Hernando','country':'United States','state':'Mississippi','zipcode':'38632','date':new Date('Jun 02 2020'),'time':'2:30 PM'},},{customerInformation:{'firstName':'Elon','lastName':'Musk','email':'elonMusk@tesla.com','phone':'5555555555'},vehicleInformation:{'year':'2020','make':'Telsa','model':'Cybertruck','color':'Silver','notes':'Front glass is shattered'},pickupInformation:{'street':'425 Prospect Rd.','city':'Bethpage','country':'United States','state':'New York','zipcode':'3811','date':new Date('Jun 03 2020'),'time':'11:30 PM'},},{customerInformation:{'firstName':'Jordan','lastName':'Belfort','email':'wolf@wallstreet.com','phone':'5555555555'},vehicleInformation:{'year':'1991','make':'Ferrari','model':'Testarossa','color':'White','notes':'Has racing stripes'},pickupInformation:{'street':'425 Prospect Rd.','city':'Bethpage','country':'United States','state':'New York','zipcode':'3811','date':new Date('Jun 04 2020'),'time':'9:00 AM'},},{customerInformation:{'firstName':'Toti','lastName':'Cuervo','email':'cuervor14@gmail.com','phone':'9016924116'},vehicleInformation:{'year':'2011','make':'Toyota','model':'Corolla','color':'White','notes':''},pickupInformation:{'street':'10034 Cameron Ridge Trail','city':'Cordova','country':'United States','state':'Tennessee','zipcode':'38016','date':new Date('Jun 01 2020'),'time':'10:30 AM'},},{customerInformation:{'firstName':'Breanna','lastName':'Owsley','email':'bnowsley@gmail.com','phone':'5555555555'},vehicleInformation:{'year':'2000','make':'Nissan','model':'Versa','color':'Black','notes':''},pickupInformation:{'street':'44 N. Applegate Ave','city':'Hernando','country':'United States','state':'Mississippi','zipcode':'38632','date':new Date('Jun 02 2020'),'time':'2:30 PM'},}],

    }
}

const getters = {
    reservations(state){
        return state.reservations;
    },
    object(state){
        return state.object;
    },
    form(state){
        return state.form;
    },
    formPageControl(state) {
        return state.formPageControl;
    },
    availableVehicles(state) {
        return state.availableVehicles;
    },
    availableMakes(state) {
        return state.availableMakes;
    },
    availableYears(state) {
        return state.availableYears;
    },
    availableStates(state) {
        return state.availableStates;
    },
    loading(state){
        return state.loading;
    },
};

const actions = {

    fetchCarData({commit, state}) {

        //clears the forms to get more accurate data
        commit('CLEAR_VEHICLES');
        commit('CLEAR_MAKES');

        //adds the year in URIeconded cause API is difficult
        const where = encodeURIComponent(JSON.stringify({"Year": parseInt(state.form.vehicleInformation.year)}));

        //sends requests
        axios.get('https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=600&where=' + where, {headers: {'X-Parse-Application-Id': '10eDzdhlSj8qMzFgvLwiEkKjSPUT95hwgcSPHZoc', 'X-Parse-REST-API-Key': '0jBEnmcqLXxmyH6h0KRbpXzjqn7hePDoqnbpdvQP',}})
            .then( response => {
                //iterates through the cars and adds them to the vehicles, and saves unique make to makes
                for (const car in response.data.results) {

                    commit('ADD_VEHICLE_TO_VEHICLES', response.data.results[car]);

                    if (!state.availableMakes.includes(response.data.results[car].Make)) {
                        commit('ADD_MAKE_TO_MAKES', response.data.results[car].Make);
                    }
                }
            });
    },

    submitReservationForm({commit, state}) {
        //good practice
        commit('setLoading', true);

        //In theory if I were to have created an API, this is what the submission form would have looked like
        // axios.post('some/url/here', state.form)
        //     .then(response => {
        //
        //     })
        commit('ADD_RESERVATION_TO_RESERVATIONS', state.form);
        commit('setLoading', false);
    }

};

const mutations = {
    setLoading(state, loading) {
        state.loading = loading
    },
    SET_FORM_FIRST_NAME(state, value){
        state.form.customerInformation.firstName = value;
    },
    SET_FORM_LAST_NAME(state, value){
        state.form.customerInformation.lastName = value;
    },
    SET_FORM_EMAIL(state, value){
        state.form.customerInformation.email = value;
    },
    SET_FORM_PHONE(state, value){
        state.form.customerInformation.phone = value;
    },
    SET_FORM_VEHICLE_YEAR(state, value) {
        state.form.vehicleInformation.year = value;
        if (state.availableYears.includes(state.form.vehicleInformation.year)) {
            this.dispatch('reservation/fetchCarData');
        } else {
            state.availableMakes = [];
        }
    },
    SET_FORM_VEHICLE_MAKE(state, value) {
        state.form.vehicleInformation.make = value;
    },
    SET_FORM_VEHICLE_MODEL(state, value) {
        state.form.vehicleInformation.model = value;
    },
    SET_FORM_VEHICLE_COLOR(state, value) {
        state.form.vehicleInformation.color = value;
    },
    SET_FORM_VEHICLE_NOTES(state, value) {
        state.form.vehicleInformation.notes = value;
    },
    SET_FORM_PICKUP_STREET(state,value) {
        state.form.pickupInformation.street = value;
    },
    SET_FORM_PICKUP_CITY(state,value) {
        state.form.pickupInformation.city = value;
    },
    SET_FORM_PICKUP_STATE(state,value) {
        state.form.pickupInformation.state = value;
    },
    SET_FORM_PICKUP_COUNTRY(state,value) {
        state.form.pickupInformation.country = value;
    },
    SET_FORM_PICKUP_ZIP(state,value) {
        state.form.pickupInformation.zipcode = value;
    },
    SET_FORM_PICKUP_DATE(state,value) {
        state.form.pickupInformation.date = value;
    },
    SET_FORM_PICKUP_TIME(state,value) {
        state.form.pickupInformation.time = value;
    },
    SET_CURRENT_PAGE(state, currentPage) {
        for (const page in state.formPageControl) {
            state.formPageControl[page].current = state.formPageControl[page] === currentPage;
        }
    },
    SET_CURRENT_PAGE_BY_NAME(state, name) {
        for (const page in state.formPageControl) {
            state.formPageControl[page].current = state.formPageControl[page].name === name;
        }
    },
    UPDATE_COMPLETE(state, name) {
        for (const page in state.formPageControl) {
            if (state.formPageControl[page].name === name) {
                state.formPageControl[page].complete = true;
            }
        }
    },
    ADD_VEHICLE_TO_VEHICLES(state, vehicle) {
        state.availableVehicles.push(vehicle);
    },
    ADD_MAKE_TO_MAKES(state, make) {
        state.availableMakes.push(make);
    },
    CLEAR_VEHICLES(state) {
        state.availableVehicles = []
    },
    CLEAR_MAKES(state) {
        state.availableMakes = [];
    },
    ADD_RESERVATION_TO_RESERVATIONS(state, res) {
        state.reservations.push(res);
    },
    CLEAR_FORM(state) {
        state.form = {
            customerInformation: {
                'firstName': '',
                'lastName': '',
                'email': '',
                'phone': ''
            },
            vehicleInformation: {
                'year': '',
                'make': '',
                'model': '',
                'color': '',
                'notes': ''
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
        };
    },
    CLEAR_FORM_PAGE_CONTROL(state) {
        state.formPageControl = {
            customerInfo: {
                complete: false,
                    current: true,
                    name: 'reservation-customer-information'

            },
            vehicleInfo: {
                complete: false,
                    current: false,
                    name: 'reservation-vehicle-information'

            },
            pickupInfo: {
                complete: false,
                    current: false,
                    name: 'reservation-pickup-information'

            },
            overview: {
                complete: false,
                    current: false,
                    name: 'reservation-overview'

            },
        }
    }

};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}

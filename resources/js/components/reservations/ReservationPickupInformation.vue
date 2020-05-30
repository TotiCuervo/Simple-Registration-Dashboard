<template>
    <div class="container mx-auto">
        <form class="w-full lg:w-10/12 mx-auto">
            <!--street address and city-->
            <div class="flex flex-wrap sm:mb-6 justify-center">
                <!--street address-->
                <div class="w-full md:w-6/12 lg:w-6/12 px-3 mb-3 sm:mb-0">
                    <label class="label-header" >Street Address</label>
                    <input v-model="street" v-bind:class="{'border-red-500': showErrors && !validStreet}" class="input-field" type="text" placeholder="Street" autocomplete="new-password">
                    <p class="error-text" v-if="showErrors && !validStreet">Please check out this field.</p>
                </div>
                <!--city-->
                <div class="w-full md:w-6/12 lg:w-6/12 px-3 mb-3 sm:mb-0">
                    <label class="label-header" >City</label>
                    <input v-model="city" v-bind:class="{'border-red-500': showErrors && !validCity}" class="input-field" type="text" placeholder="City" autocomplete="new-password">
                    <p class="error-text" v-if="showErrors && !validCity">Please check out this field.</p>
                </div>
            </div>
            <!--state, country, zipcode-->
            <div class="flex flex-wrap sm:mb-6 justify-center">
                <!--country-->
                <reservation-country-dropdown class="px-3 w-full sm:w-4/12 mb-3 sm:mb-0"></reservation-country-dropdown>
                <!--state-->
                <reservation-state-dropdown class="px-3 w-full sm:w-5/12 mb-3 sm:mb-0" :showError="showErrors && !validState"></reservation-state-dropdown>
                <!--zip-->
                <div class="w-full sm:w-3/12 px-3 mb-3 sm:mb-0">
                    <label class="label-header" >Zip Code</label>
                    <input v-model="zip" v-bind:class="{'border-red-500': showErrors && !validZip}" class="input-field" type="text" pattern="[0-9]{5}" placeholder="Zip Code" autocomplete="new-password">
                    <p class="error-text" v-if="showErrors && !validZip">Please check out this field.</p>
                </div>
            </div>
            <!--date, time-->
            <div class="flex flex-wrap sm:mb-6 justify-center">
                <!--date-->
                <reservation-date-picker class="w-full sm:w-4/12 px-3" :showError="showErrors && !validDate" :validDate="!validDate"></reservation-date-picker>
                <reservation-time-picker class="w-full sm:w-4/12 px-3" :showError="showErrors && !validTime" :validTime="!validTime"></reservation-time-picker>
                <div class="w-full sm:w-4/12 pt-6 px-3"><button @click="nextPage" class="success-button w-full h-12">Next</button></div>
            </div>
        </form>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {
                showErrors: false
            }
        },
        methods: {
            ...mapActions('reservation', ['changePageByName']),
            nextPage() {
                if (this.somethingIsInvalid) {
                    this.showErrors = true;
                } else {
                    this.$store.commit('reservation/UPDATE_COMPLETE', 'reservation-pickup-information');
                    this.$store.commit('reservation/SET_CURRENT_PAGE_BY_NAME','reservation-overview');
                }
            }
        },
        computed: {
            ...mapGetters('reservation', ['form', 'availableStates']),
            street: {
                get() {
                    return this.form.pickupInformation.street;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_PICKUP_STREET', value);
                }
            },
            city: {
                get() {
                    return this.form.pickupInformation.city;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_PICKUP_CITY', value);
                }
            },
            zip: {
                get() {
                    return this.form.pickupInformation.zipcode;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_PICKUP_ZIP', value);
                }
            },
            validStreet() {
                return this.form.pickupInformation.street.length > 0;
            },
            validCity() {
                return this.form.pickupInformation.city.length > 0;
            },
            validState() {
                return this.availableStates.includes(this.form.pickupInformation.state);
            },
            validZip() {
                return /^\d+$/.test(this.form.pickupInformation.zipcode) && this.form.pickupInformation.zipcode.length === 5;
            },
            validDate() {
                return Object.prototype.toString.call(this.form.pickupInformation.date) === '[object Date]'
            },
            validTime() {
                return /(0[1-9]:[0-5][0-9]((\ ){0,1})((AM)|(PM)|(am)|(pm)))|([1-9]:[0-5][0-9]((\ ){0,1})((AM)|(PM)|(am)|(pm)))|(1[0-2]:[0-5][0-9]((\ ){0,1})((AM)|(PM)|(am)|(pm)))/.test(this.form.pickupInformation.time);
            },
            somethingIsInvalid() {
                return !this.validStreet || !this.validCity || !this.validState || !this.validZip || !this.validDate || !this.validTime;
            }
        },
        watch: {

        }

    }
</script>

<style scoped>

</style>

<template>
    <form class="w-full mx-auto">
        <!--Name-->
        <div class="flex flex-wrap sm:flex-no-wrap mb-6 justify-center">
            <reservation-year-dropdown class="w-full sm:w-48 px-3 mb-6 md:mb-0"></reservation-year-dropdown>
            <reservation-make-dropdown class="px-3 w-full sm:w-56 mb-6"></reservation-make-dropdown>
            <reservation-model-dropdown class="px-3 w-full sm:w-72 mb-6"></reservation-model-dropdown>
            <button @click="nextPage" class="success-button mx-3 w-full sm:w-24 h-12 p-0 sm:mt-6" v-bind:class="{'disabled-button': somethingIsInvalid}">Next</button>

        </div>
    </form>
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
                    this.$store.commit('reservation/UPDATE_COMPLETE', 'reservation-vehicle-information');
                    this.$store.commit('reservation/SET_CURRENT_PAGE_BY_NAME','reservation-pickup-information');
                }
            }
        },
        computed: {
            ...mapGetters('reservation', ['form', 'availableYears', 'availableMakes', 'availableVehicles']),

            validYear() {
                return this.availableYears.includes(this.form.vehicleInformation.year);
            },
            validMake() {
                return this.availableMakes.includes(this.form.vehicleInformation.make);
            },
            validModel() {

                let foundIt = false;

                for (const car in this.availableVehicles) {
                    if (this.form.vehicleInformation.model === this.availableVehicles[car].Model) {
                        foundIt = true;
                    }
                }

                return foundIt;

            },
            somethingIsInvalid() {
                return !this.validYear || !this.validMake|| !this.validModel;
            }
        },
        watch: {

        }

    }
</script>

<style scoped>

</style>

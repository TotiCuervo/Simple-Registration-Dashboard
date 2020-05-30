<template>
    <form class="w-full mx-auto">
        <!--Name-->
        <div class="flex flex-wrap sm:flex-no-wrap mb-6 justify-center">
            <reservation-year-dropdown class="w-full sm:w-48 px-3 mb-6 md:mb-0"></reservation-year-dropdown>
            <reservation-make-dropdown class="px-3 w-full sm:w-56 mb-6"></reservation-make-dropdown>
            <reservation-model-dropdown class="px-3 w-full sm:w-72 mb-6"></reservation-model-dropdown>
        </div>
        <div class="flex flex-wrap sm:flex-no-wrap mb-6 justify-center">
            <!--color-->
            <div class="w-full sm:w-56 form-group px-3">
                <label class="label-header">Color</label>
                <input v-model="color" v-bind:class="{'border-red-500': showErrors && !validColor}" class="input-field" type="text" placeholder="Color" autocomplete="new-password">
                <p class="error-text" v-if="showErrors && !validColor">Please check out this field.</p>
            </div>
            <!--notes-->
            <div class="w-full sm:w-72 form-group px-3">
                <label class="label-header">Notes (optional)</label>
                <input v-model="notes" class="input-field" type="text" placeholder="Identifying features" autocomplete="new-password">
            </div>
            <div class="w-full sm:w-48 form-group px-3 sm:mt-6">
                <button @click="nextPage" class="success-button w-full h-12" v-bind:class="{'disabled-button': !mandatory}">Next</button>
            </div>
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
                if(this.mandatory) {
                    if (this.somethingIsInvalid) {
                        this.showErrors = true;
                    } else {
                        this.$store.commit('reservation/UPDATE_COMPLETE', 'reservation-vehicle-information');
                        this.$store.commit('reservation/SET_CURRENT_PAGE_BY_NAME','reservation-pickup-information');
                    }
                }
            }
        },
        computed: {
            ...mapGetters('reservation', ['form', 'availableYears', 'availableMakes', 'availableVehicles']),
            color: {
                get() {
                    return this.form.vehicleInformation.color;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_VEHICLE_COLOR', value);
                }
            },
            notes: {
                get() {
                    return this.form.vehicleInformation.notes;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_VEHICLE_NOTES', value);
                }
            },
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
            validColor() {
                return this.color.length > 0;
            },
            mandatory() {
                return this.validYear || this.validMake|| this.validModel
            },
            somethingIsInvalid() {
                return !this.validYear || !this.validMake|| !this.validModel || !this.validColor;
            }
        },
        watch: {

        }

    }
</script>

<style scoped>

</style>

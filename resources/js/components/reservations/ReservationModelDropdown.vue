<template>
    <div>
        <label class="form-header">Model</label>
        <div class="relative h-12 overflow-visible" v-bind:class="{'z-20': clicked}">
            <div class="dropdown-wrapper" v-bind:class="{'bg-gray-200': disabled,'border-red-500': this.errorCheck}">
                <div class="flex items-center justify-between">
                    <input  v-model="formModel" @click="clicked = true" class="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Model" v-bind:disabled="disabled">
                    <span v-show="!clicked"><i class="fas fa-angle-up"></i></span>
                    <span v-show="clicked"><i class="fas fa-angle-down"></i></span>
                </div>
                <div v-if="clicked" class="dropdown-list">
                    <ul>
                        <li v-for="filteredModel in this.filteredModels" v-if="filteredModel.Make === formMake" @click="clickedModel(filteredModel.Model)">
                            <p class="dropdown-item">
                                {{ filteredModel.Model }}
                                <span class="float-right mr-4" v-bind:class="{'hidden': filteredModel.Model !== formModel }"><i class="fas fa-check"></i></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="text-red-500 text-xs italic" v-if="this.errorCheck">Please check out this field.</p>
        <button v-if="clicked" tabindex="-1" @click="clicked = false" class="fixed inset-0 h-screen w-screen cursor-default z-10"></button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {
                clicked: false,
            }
        },
        methods: {
            clickedModel(make) {
                this.formModel = make;
                this.clicked = false;
            }
        },
        computed: {
            ...mapGetters('reservation', ['form', 'availableMakes', 'availableVehicles']),
            formModel: {
                get() {
                    return this.form.vehicleInformation.model;
                },
                set(value) {
                    return this.$store.commit('reservation/SET_FORM_VEHICLE_MODEL', value);
                }
            },
            formMake: {
                get() {
                    return this.form.vehicleInformation.make;
                },
                set(value) {
                    return this.$store.commit('reservation/SET_FORM_VEHICLE_MAKE', value);
                }
            },
            filteredModels() {
                return this.availableVehicles.filter((vehicle) => {
                    return vehicle.Model.match(this.formModel) && vehicle.Make === this.formMake;
                });
            },
            disabled() {
                if(this.formModel !== '' && !this.availableMakes.includes(this.form.vehicleInformation.make)) {
                    this.formModel = '';
                }
                return !this.availableMakes.includes(this.form.vehicleInformation.make)  && this.formModel.length === 0;
            },
            errorCheck() {
                return this.filteredModels.length === 0 && this.formModel.length !== 0;
            }
        }
    }
</script>

<style scoped>

</style>

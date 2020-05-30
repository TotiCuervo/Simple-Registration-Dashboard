<template>
    <div>
        <label class="form-header">Make</label>
        <div class="relative h-12 overflow-visible" v-bind:class="{'z-20': clicked}">
            <div class="dropdown-wrapper" v-bind:class="{'bg-gray-200': disabled, 'border-red-500': this.errorCheck}">
                <div class="flex items-center justify-between">
                    <input  v-model="formMake" @click="clicked = true" class="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Make" v-bind:disabled="disabled">
                    <span v-show="!clicked"><i class="fas fa-angle-up"></i></span>
                    <span v-show="clicked"><i class="fas fa-angle-down"></i></span>
                </div>
                <div v-if="clicked" class="dropdown-list">
                    <ul>
                        <li v-for="filteredMake in this.filteredMakes" @click="clickedMake(filteredMake)">
                            <p class="dropdown-item">
                                {{ filteredMake }}
                                <span class="float-right mr-4" v-bind:class="{'hidden': filteredMake !== formMake }"><i class="fas fa-check"></i></span>
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
                years : [
                    '2020',
                    '2019',
                    '2018',
                    '2017',
                    '2016',
                    '2015',
                    '2014',
                    '2013',
                    '2012',
                    '2011',
                    '2010',
                    '2009',
                    '2008',
                    '2007',
                    '2006',
                    '2005',
                    '2004',
                    '2003',
                    '2002',
                    '2001',
                    '2000',
                    '1999',
                    '1998',
                    '1997',
                    '1996',
                    '1995',
                    '1994',
                    '1993',
                    '1992',

                ],
            }
        },
        methods: {
            ...mapActions('reservation', ['fetchCarData']),
            clickedMake(make) {
                this.formMake = make;
                this.clicked = false;
            }
        },
        computed: {
            ...mapGetters('reservation', ['form', 'availableYears', 'availableMakes']),
            formMake: {
                get() {
                    return this.form.vehicleInformation.make;
                },
                set(value) {
                    return this.$store.commit('reservation/SET_FORM_VEHICLE_MAKE', value);
                }
            },
            filteredMakes() {
                return this.availableMakes.filter((make) => {
                    return make.match(this.formMake)
                });
            },
            disabled() {
                if(this.formMake !== '' && !this.availableYears.includes(this.form.vehicleInformation.year)) {
                    this.formMake = '';
                }
                return !this.availableYears.includes(this.form.vehicleInformation.year) && this.filteredMakes.length === 0;
            },
            errorCheck() {
                return this.availableMakes.length !== 0 && this.filteredMakes.length === 0;
            }
        }
    }
</script>

<style scoped>

</style>

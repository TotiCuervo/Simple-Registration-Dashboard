<template>
    <div>
        <label class="label-header">Year</label>
        <div class="relative" v-bind:class="{'z-20': clicked}">
            <div class="dropdown-wrapper" v-bind:class="{'border-red-500': this.filteredYears.length === 0}">
                <div class="flex items-center justify-between">
                    <input v-model="formYear" @click="clicked = true" class="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Year">
                    <span v-show="!clicked"><i class="fas fa-angle-up"></i></span>
                    <span v-show="clicked"><i class="fas fa-angle-down"></i></span>
                </div>
                <div v-if="clicked" class="dropdown-list">
                    <ul>
                        <li v-for="filteredYear in this.filteredYears" @click="clickedYear(filteredYear)">
                            <p class="dropdown-item">
                                {{ filteredYear }}
                                <span class="float-right mr-4" v-bind:class="{'hidden': filteredYear !== formYear }"><i class="fas fa-check"></i></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="text-red-500 text-xs italic" v-if="this.filteredYears.length === 0">Please enter a valid year.</p>
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
            clickedYear(year) {
                this.formYear = year;
                this.clicked = false;
            }
        },
        computed: {
            ...mapGetters('reservation', ['form', 'availableYears']),
            formYear: {
                get() {
                    return this.form.vehicleInformation.year;
                },
                set(value) {
                    return this.$store.commit('reservation/SET_FORM_VEHICLE_YEAR', value);
                }
            },
            filteredYears() {
                return this.availableYears.filter((year) => {
                    return year.match(this.formYear)
                });
            }
        }
    }
</script>

<style scoped>

</style>

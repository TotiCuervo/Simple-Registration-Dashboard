<template>
    <div>
        <label class="label-header">State</label>
        <div class="relative h-12 overflow-visible" v-bind:class="{'z-20': clicked}">
            <div class="dropdown-wrapper" v-bind:class="{'border-red-500': this.filteredStates.length === 0 || this.showError}">
                <div class="flex items-center justify-between">
                    <input v-model="formState" @click="clicked = true" class="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="State" autocomplete="new-password">
                    <span v-show="!clicked"><i class="fas fa-angle-up"></i></span>
                    <span v-show="clicked"><i class="fas fa-angle-down"></i></span>
                </div>
                <div v-if="clicked" class="dropdown-list">
                    <ul>
                        <li v-for="state in this.filteredStates" @click="clickedState(state)">
                            <p class="dropdown-item">
                                {{ state }}
                                <span class="float-right mr-4" v-bind:class="{'hidden': state !== formState }"><i class="fas fa-check"></i></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="error-text" v-if="this.filteredStates.length === 0 || this.showError">Please check out this field..</p>
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
            clickedState(state) {
                this.formState = state;
                this.clicked = false;
            }
        },
        props: {
            showError: {
                default: false
            }
        },
        computed: {
            ...mapGetters('reservation', ['form', 'availableYears', 'availableStates']),
            formState: {
                get() {
                    return this.form.pickupInformation.state;
                },
                set(value) {
                    return this.$store.commit('reservation/SET_FORM_PICKUP_STATE', value);
                }
            },
            filteredStates() {
                return this.availableStates.filter((state) => {
                    return state.match(this.formState)
                });
            }
        }
    }
</script>

<style scoped>

</style>

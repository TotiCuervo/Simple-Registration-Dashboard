<template>
    <div>
        <label class="label-header">Country</label>
        <div class="relative h-12 overflow-visible">
            <div class="dropdown-wrapper">
                <div class="flex items-center justify-between">
                    <input v-model="formCountry" :disabled="true" class="w-full appearance-none bg-transparent border-none text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Country" autocomplete="new-password">
                    <span v-show="!clicked"><i class="fas fa-angle-up"></i></span>
                </div>
            </div>
        </div>
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
        computed: {
            ...mapGetters('reservation', ['form', 'availableYears']),
            formCountry: {
                get() {
                    return this.form.pickupInformation.country;
                },
                set(value) {
                    // return this.$store.commit('reservation/SET_FORM_VEHICLE_YEAR', value);
                }
            },
        }
    }
</script>

<style scoped>

</style>

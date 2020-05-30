<template>
    <div>
        <label class="label-header" >Date</label>
        <Datepicker v-model="date" class="w-full" v-bind:input-class="{'border-red-500': this.validDate && this.showError, 'input-field' : true}" :placeholder="'Date'"></Datepicker>
        <p class="error-text" v-if="this.validDate && this.showError">Please check out this field..</p>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import {mapActions, mapGetters} from 'vuex';
    export default {
       data() {
           return {

           }
       },
        props: {
            showError: {
                default: false
            },
            validDate: {
                default: false
            }
        },
        components: {
            Datepicker
        },
        computed: {
            ...mapGetters('reservation', ['form']),
            date: {
                get() {
                    return this.form.pickupInformation.date;
                },
                set(value) {
                    return this.$store.commit('reservation/SET_FORM_PICKUP_DATE', value);
                }

            }
        }
    }
</script>

<style scoped>

</style>

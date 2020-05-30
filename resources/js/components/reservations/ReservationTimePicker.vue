<template>
    <div>
        <label class="label-header" >Time</label>
        <vue-timepicker v-model="time" v-bind:input-class="{'border-red-500': this.validTime && this.showError, 'input-field' : true}" format="hh:mm A" :placeholder="'Time'" :manual-input="true" ></vue-timepicker>
        <p class="error-text" v-if="this.validTime && this.showError">Please check out this field..</p>
    </div>
</template>

<script>
    import VueTimepicker from 'vue2-timepicker';
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {
            }
        },
        components: { VueTimepicker },
        props: {
            showError: {
                default: false
            },
            validTime: {
                default: false
            }
        },
        computed: {
            ...mapGetters('reservation', ['form']),
            time: {
                get() {
                    return this.form.pickupInformation.time;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_PICKUP_TIME', value);
                }
            }
        }
    }
</script>

<style scoped>
</style>

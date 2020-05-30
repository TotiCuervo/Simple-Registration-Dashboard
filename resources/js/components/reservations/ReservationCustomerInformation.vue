<template>
    <div class="container mx-auto">
        <form class="w-full lg:w-10/12 mx-auto">
            <!--Name-->
            <div class="flex flex-wrap justify-center">
                <!--first name-->
                <div class="w-full sm:w-6/12 form-group">
                    <label class="label-header">First Name</label>
                    <input v-model="firstName" v-bind:class="{'border-red-500': showErrors && !validFirstName}" class="input-field" type="text" placeholder="John" autocomplete="new-password">
                    <p class="error-text" v-if="showErrors && !validFirstName">Please check out this field.</p>
                </div>
                <!--last name-->
                <div class="w-full sm:w-6/12 form-group">
                    <label class="label-header" >Last Name</label>
                    <input v-model="lastName" v-bind:class="{'border-red-500': showErrors && !validLastName}" class="input-field" type="text" placeholder="Doe" autocomplete="new-password">
                    <p class="text-red-500 text-xs italic" v-if="showErrors && !validLastName">Please check out this field.</p>
                </div>
            </div>
            <!--Email and Phone-->
            <div class="flex flex-wrap justify-center">

                <div class="w-full sm:w-7/12 form-group">
                    <label class="label-header">Email</label>
                    <input v-model="email" v-bind:class="{'border-red-500': showErrors && !validEmail}" class="input-field" type="email" placeholder="JohnDoe@gmail.com" autocomplete="new-password">
                    <p class="error-text" v-if="showErrors && !validEmail">Please check out this field.</p>
                </div>
                <div class="w-full sm:w-5/12 lg:w-5/12 form-group">
                    <label class="label-header">Phone</label>
                    <input v-model="phone" v-bind:class="{'border-red-500': showErrors && !validPhone}" class="input-field" type="tel" placeholder="xxx-xxx-xxxx" autocomplete="new-password">
                    <p class="error-text" v-if="showErrors && !validPhone">Please check out this field.</p>
                </div>
            </div>
            <!--Email and Phone-->
            <div class="w-full flex justify-end form-group">
                <button @click="nextPage" class="success-button w-full sm:w-48">Vehicle Information</button>
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
                    this.$store.commit('reservation/UPDATE_COMPLETE', 'reservation-customer-information');
                    this.$store.commit('reservation/SET_CURRENT_PAGE_BY_NAME','reservation-vehicle-information');
                }
            }
        },
        computed: {
            ...mapGetters('reservation', ['form']),
            firstName: {
                get() {
                    return this.form.customerInformation.firstName;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_FIRST_NAME', value);
                }
            },
            lastName: {
                get() {
                    return this.form.customerInformation.lastName;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_LAST_NAME', value);
                }
            },
            email: {
                get() {
                    return this.form.customerInformation.email;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_EMAIL', value);
                }
            },
            phone: {
                get() {
                    return this.form.customerInformation.phone;
                },
                set(value) {
                    this.$store.commit('reservation/SET_FORM_PHONE', value);
                }
            },
            validFirstName() {
                return this.form.customerInformation.firstName.length > 0 && /^[a-zA-Z]+$/.test(this.form.customerInformation.firstName);
            },
            validLastName() {
                return this.form.customerInformation.lastName.length > 0 && /^[a-zA-Z]+$/.test(this.form.customerInformation.lastName);
            },
            validEmail() {
                return this.form.customerInformation.email.length > 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.customerInformation.email);
            },
            validPhone() {
                return this.form.customerInformation.phone.length > 0 && /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/.test(this.form.customerInformation.phone);
            },
            somethingIsInvalid() {
                return !this.validFirstName || !this.validLastName || !this.validEmail || !this.validPhone;
            }
        },
        watch: {

        }

    }
</script>

<style scoped>

</style>

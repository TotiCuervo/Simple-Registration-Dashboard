<template>
    <t-modal ref="modal" v-on:before-open="resetOpen">
        <div class="container mx-auto pt-20 text-2xl text-center">
            <div class="w-full">
                Are you sure you want to leave this page?
            </div>
            <div class="w-full">
                You will <b>lose all data on this page</b> if you proceed.
            </div>
        </div>
        <template v-slot:footer>
            <div class="w-full justify-end flex">
                <button class="danger-outline-button mr-4" @click="$refs.modal.hide()">Back to safety</button>
                <button class="danger-button" @click="redirectPage()">Yes, I am sure</button>
            </div>
        </template>
    </t-modal>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {

            }
        },
        methods: {
            resetOpen() {
                this.$store.commit('warningModal/SET_OPEN', false);
            },
            redirectPage() {
                this.$refs.modal.hide();
                this.$router.push(this.redirect);
            }
        },
        computed: {
            ...mapGetters('warningModal', ['isOpen', 'redirect'])
        },
        watch: {
            isOpen() {
                if (this.isOpen) {
                    this.$refs.modal.show();
                }
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="progressBar-wrapper">
        <div class="progressBar">
            <!--customer-->
            <button @click="changePage(formPageControl.customerInfo, 'customerInfo')" class="progressBar-item" v-bind:class="{'progressBar-current': this.formPageControl.customerInfo.current,'progressBar-done': this.formPageControl.customerInfo.complete }">
                <i class="fas fa-user mr-2"></i>Customer
                <span  v-bind:class="{'hidden': !this.formPageControl.customerInfo.complete || this.formPageControl.customerInfo.current}"><i class="fas fa-check ml-2 text-green-500"></i></span>
            </button>
            <!--vehicle-->
            <button @click="changePage(formPageControl.vehicleInfo, 'vehicleInfo')" class="progressBar-item" v-bind:class="{'progressBar-current': this.formPageControl.vehicleInfo.current,'progressBar-done': this.formPageControl.vehicleInfo.complete }">
                <i class="fas fa-car mr-2"></i>Vehicle
                <span v-bind:class="{'hidden': !this.formPageControl.vehicleInfo.complete || this.formPageControl.vehicleInfo.current}"><i class="fas fa-check ml-2 text-green-500"></i></span>
            </button>
            <!--pickup-->
            <button @click="changePage(formPageControl.pickupInfo, 'pickupInfo')" class="progressBar-item" v-bind:class="{'progressBar-current': this.formPageControl.pickupInfo.current,'progressBar-done': this.formPageControl.pickupInfo.complete }">
                <i class="fas fa-map-marker-alt mr-2"></i>Pickup
                <span v-bind:class="{'hidden': !this.formPageControl.pickupInfo.complete || this.formPageControl.pickupInfo.current}"><i class="fas fa-check ml-2 text-green-500"></i></span>
            </button>
            <!--overview-->
            <button @click="changePage(formPageControl.overview, 'overview')" class="progressBar-item" v-bind:class="{'progressBar-current': this.formPageControl.overview.current,'progressBar-done': this.formPageControl.overview.complete}" >
                <i class="fas fa-scroll mr-2"></i>Overview
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {

            }
        },
        methods: {
            changePage(page, name) {
                //gets the index of the page the user is wanting to travel to
                let pageIndex = this.keys.indexOf(name);

                //checks to see if the page the user wants to travel to is complete
                //this prevents a user from skipping ahead to a part they are not supposed to go
                //the second part forces a user to press the next button, causing the page to reevaluate if everything is complete
                //this prevents a user from going back, deleting something, and then going back
                if (page.complete && pageIndex < this.currentPageIndex) {
                    this.$store.commit('reservation/SET_CURRENT_PAGE', page);
                }

            }
        },
        computed: {
            ...mapGetters('reservation', ['formPageControl']),
            //This gets the index of the current page. I use this to evaluate which pages a user can travel to
            currentPageIndex() {
                //Iterates through each page and wait for the one that is complete, then returns that
                for (const page in this.formPageControl) {
                    if (this.formPageControl[page].current) {
                        return this.keys.indexOf(page);
                    }
                }
            },
            //This gets all the keys to use in the changePage()
            keys() {
                return Object.keys(this.formPageControl);
            }
        }
    }
</script>

<style scoped>

</style>

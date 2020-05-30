<template>
    <div class="dashboard">
        <div class="dashboard-header"><h1 class="text-2xl font-medium">New Reservation</h1></div>
        <reservation-progress-bar></reservation-progress-bar>
        <!--pages-->
        <!--this is a very hacky way of doing page control without having to make a bunch of if statements. because only one page will be "current", it will only ever display 1 page-->
        <component class="mt-10" :is="component.name" v-for="component in this.formPageControl" v-if="component.current" :key="component.name"></component>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('reservation', ['formPageControl']),
        },
    }
</script>

<style scoped>

</style>

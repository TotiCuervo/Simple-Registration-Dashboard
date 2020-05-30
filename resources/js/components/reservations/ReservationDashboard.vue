<template>
    <div class="dashboard">
        <!--Header-->
        <div class="dashboard-header">
            <h1 class="text-2xl font-medium">Reservations</h1>
            <reservation-search class="hidden md:flex"></reservation-search>
            <router-link to="/reservation/new"><button class="primary-button">New Reservation</button></router-link>
        </div>
        <!--Hidden Header. Appears past small reakpoint-->
        <div class="w-full flex items-center justify-center mt-10 block md:hidden">
            <reservation-search class="px-0"></reservation-search>
        </div>
        <!--reservation table-->
        <reservations-table></reservations-table>
    </div>
</template>

<script>
    export default {
        name: "OrderDashboard"
    }
</script>

<style scoped>

</style>

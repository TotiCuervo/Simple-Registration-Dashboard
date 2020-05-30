<template>
    <table class=" w-full mt-10 rounded-lg bg-white shadow-md border mt-10 overflow-hidden">
        <thead class="flex w-full">
        <tr class="flex w-full border-b border-gray-400">
            <th class="p-4 w-1/4">Customer</th>
            <th class="p-4 w-1/4">Vehicle</th>
            <th class="p-4 w-1/4">Pickup Time</th>
        </tr>
        </thead>
        <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
        <tbody class="bg-grey-light flex flex-col items-center overflow-y-scroll w-full" style="height: 60vh;">
        <tr v-for="(reservation, index) in reservations.slice().reverse()" class="flex w-full border-b border-gray-400 hover:bg-gray-100 transition ease-in-out duration-200 items-center px-4 py-2 group">
            <td class="w-1/4">{{reservation.customerInformation.firstName}} {{reservation.customerInformation.lastName}} <button v-if="reservations.length > 10 && index === 0" class="ml-3 bg-red-500 px-4 py-1 rounded-full text-xs text-white">New!</button></td>
            <td class="w-1/4 text-center">{{reservation.vehicleInformation.year}} {{reservation.vehicleInformation.make}} {{reservation.vehicleInformation.model}}</td>
            <td class="w-1/4 text-center">{{reservation.pickupInformation.date.toDateString()}} {{reservation.pickupInformation.time}}</td>
            <td class="w-1/4 text-center invisible group-hover:visible transition ease-in-out duration-500"><button @click="openDetail(reservation)" class="primary-button px-10 text-xs">Details</button></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {

            }
        },
        methods: {
            openDetail(res) {
                this.$store.commit('detailModal/SET_RESERVATION', res);
                this.$store.commit('detailModal/SET_OPEN', true);
            }
        },
        computed: {
            ...mapGetters('reservation', ['reservations'])
        }
    }
</script>

<style scoped>

</style>

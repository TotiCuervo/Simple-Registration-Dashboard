<template>
    <div class="wrapper">
        <!--sidebar-->
        <div class="sidebar" v-bind:class="{'sidebar-hidden': toggleNormalFull, 'sidebar-show': toggleMobileFull}">
            <div class="p-6">
                <h2 class="text-xl uppercase mb-4 text-center italic font-bold">BizzyCar</h2>
            </div>
            <!--Transaction-->
            <div class="sidebar-group">
                <p class="sidebar-group-title">Transaction</p>
                <ul>
                    <li class="sidebar-item" @click="clickLink()" v-bind:class="{'sidebar-item-selected': this.$router.currentRoute.name === 'home'}"><i class="fas fa-shopping-basket"></i>Reservations</li>
                    <li class="sidebar-item"><i class="fas fa-shopping-cart"></i>Invoices</li>
                    <li class="sidebar-item"><i class="fas fa-car-crash"></i>Chargeback</li>
                </ul>
            </div>
            <!--Reporting-->
            <div class="sidebar-group">
                <p class="sidebar-group-title">Reporting</p>
                <ul>
                    <li class="sidebar-item"><i class="fas fa-search"></i>Transaction Lookup</li>
                    <li class="sidebar-item"><i class="fas fa-money-bill-wave"></i>Revenue</li>
                    <li class="sidebar-item"><i class="far fa-newspaper"></i>Customer Reviews</li>
                </ul>
            </div>
            <!--Tools-->
            <div class="sidebar-group">
                <p class="sidebar-group-title">Tools</p>
                <ul>
                    <li class="sidebar-item"><i class="far fa-newspaper"></i>Email</li>
                    <li class="sidebar-item"><i class="fas fa-calendar"></i> Calendar</li>
                    <li class="sidebar-item"><i class="fab fa-wpforms"></i> Estimates</li>
                </ul>
            </div>
        </div>
        <button v-if="toggleMobileFull" tabindex="-1" @click="toggleMobile" class="fixed inset-0 h-full w-full cursor-default bg-black opacity-25 md:hidden z-10"></button>
        <!--Content-->
        <div class="mainContent" v-bind:class="{'sidebar-hidden': toggleNormalFull}">
            <!--header-->
            <div class="header" v-bind:class="{'sidebar-show': toggleMobileFull}">
                <button class="focus:outline-none hidden md:block" @click="toggleNormal"><i class="fas fa-bars"></i></button>
                <button class="focus:outline-none block md:hidden" @click="toggleMobile"><i class="fas fa-bars"></i></button>
                <div class="hidden md:block">Toti Cuervo</div>
            </div>
            <!--dash-->
            <router-view></router-view>
            <warningModal></warningModal>
            <detailModal></detailModal>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toggleNormalFull: false,
                toggleMobileFull: false,
            }
        },
        created() {

        },
        methods: {
            toggleNormal() {
                this.toggleNormalFull = !this.toggleNormalFull;
                this.toggleMobileFull = false;
            },
            toggleMobile() {
                this.toggleMobileFull = !this.toggleMobileFull;
                this.toggleNormalFull = false;
            },
            clickLink() {

                if (this.$router.currentRoute.name === 'newReservation') {
                    this.$store.commit('warningModal/SET_OPEN', true);
                    this.$store.commit('warningModal/SET_REDIRECT', 'home')
                } else {
                    this.$router.push('home');
                }
            }

        }
    }
</script>

<style scoped>

</style>

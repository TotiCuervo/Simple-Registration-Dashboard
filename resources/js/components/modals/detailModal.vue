<template>
    <t-modal ref="modal" v-on:before-open="resetOpen" :width="'800'">
        <div class="container mx-auto">
            <div class="card-body">
                <!--customer-->
                <label class="title-header">Customer</label>
                <div class="flex flex-wrap mb-6">
                    <!--firstName-->
                    <div class="w-full sm:w-1/3 form-group">
                        <label class="label-header" > Name</label>
                        <label>{{reservation.customerInformation.firstName}} {{reservation.customerInformation.lastName}}</label>
                    </div>
                    <!--email-->
                    <div class="w-full sm:w-1/3 form-group">
                        <label class="label-header" >Email</label>
                        <label>{{reservation.customerInformation.email}}</label>
                    </div>
                    <div class="w-full sm:w-1/3 form-group">
                        <label class="label-header" >Phone Number</label>
                        <label>{{reservation.customerInformation.phone}}</label>
                    </div>
                </div>
                <label class="title-header">Vehicle</label>
                <div class="flex flex-wrap mb-6">
                    <!--vehicle-->
                    <div class="w-1/3 sm:w-auto form-group">
                        <label class="label-header" >Color</label>
                        <label>{{reservation.vehicleInformation.color}}</label>
                    </div>
                    <div class="w-1/3 sm:w-auto form-group">
                        <label class="label-header" >Year</label>
                        <label>{{reservation.vehicleInformation.year}}</label>
                    </div>
                    <div class="w-1/3 sm:w-auto form-group">
                        <label class="label-header" >Make</label>
                        <label>{{reservation.vehicleInformation.make}}</label>
                    </div>
                    <div class="w-1/3 sm:w-auto form-group">
                        <label class="label-header" >Model</label>
                        <label>{{reservation.vehicleInformation.model}}</label>
                    </div>
                    <div class="w-1/3 sm:w-auto form-group">
                        <label class="label-header" >Notes</label>
                        <label>{{reservation.vehicleInformation.notes}}</label>
                    </div>
                </div>
                <!--pickup-->
                <label class="title-header">Pickup</label>
                <div class="flex flex-wrap mb-6">
                    <!--firstName-->
                    <div class="w-full sm:w-auto sm:max-w-3/4 form-group">
                        <label class="label-header" >Address</label>
                        <label>{{reservation.pickupInformation.street}}, {{reservation.pickupInformation.city}} {{state}} {{reservation.pickupInformation.zipcode}}</label>
                    </div>
                    <div class="w-1/2 sm:w-auto sm:max-w-1/2 form-group" v-if="openDateForm">
                        <label class="label-header" >Date</label>
                        <label>{{reservation.pickupInformation.date.toDateString()}}</label>
                    </div>
                    <div class="w-1/2 sm:w-auto sm:max-w-1/2 form-group">
                        <label class="label-header" >Time</label>
                        <label>{{reservation.pickupInformation.time}}</label>
                    </div>
                </div>
            </div>
        </div>
        <template v-slot:footer>
            <div class="w-full justify-end flex">
                <button class="success-button w-full sm:w-64 rounded-full" @click="$refs.modal.hide()">Close</button>
            </div>
        </template>
    </t-modal>
</template>

<script>

    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {
                state: '',
            }
        },
        methods: {
            resetOpen() {
                this.$store.commit('detailModal/SET_OPEN', false);
            },
            redirectPage() {
                this.$refs.modal.hide();
                this.$router.push(this.redirect);
            },
            //cause plagarism is bad. Code credit: https://gist.github.com/calebgrove/c285a9510948b633aa47 *tweaked minorly
            abbrState(input, to){

                let states = [
                    ['Arizona', 'AZ'],
                    ['Alabama', 'AL'],
                    ['Alaska', 'AK'],
                    ['Arkansas', 'AR'],
                    ['California', 'CA'],
                    ['Colorado', 'CO'],
                    ['Connecticut', 'CT'],
                    ['Delaware', 'DE'],
                    ['Florida', 'FL'],
                    ['Georgia', 'GA'],
                    ['Hawaii', 'HI'],
                    ['Idaho', 'ID'],
                    ['Illinois', 'IL'],
                    ['Indiana', 'IN'],
                    ['Iowa', 'IA'],
                    ['Kansas', 'KS'],
                    ['Kentucky', 'KY'],
                    ['Louisiana', 'LA'],
                    ['Maine', 'ME'],
                    ['Maryland', 'MD'],
                    ['Massachusetts', 'MA'],
                    ['Michigan', 'MI'],
                    ['Minnesota', 'MN'],
                    ['Mississippi', 'MS'],
                    ['Missouri', 'MO'],
                    ['Montana', 'MT'],
                    ['Nebraska', 'NE'],
                    ['Nevada', 'NV'],
                    ['New Hampshire', 'NH'],
                    ['New Jersey', 'NJ'],
                    ['New Mexico', 'NM'],
                    ['New York', 'NY'],
                    ['North Carolina', 'NC'],
                    ['North Dakota', 'ND'],
                    ['Ohio', 'OH'],
                    ['Oklahoma', 'OK'],
                    ['Oregon', 'OR'],
                    ['Pennsylvania', 'PA'],
                    ['Rhode Island', 'RI'],
                    ['South Carolina', 'SC'],
                    ['South Dakota', 'SD'],
                    ['Tennessee', 'TN'],
                    ['Texas', 'TX'],
                    ['Utah', 'UT'],
                    ['Vermont', 'VT'],
                    ['Virginia', 'VA'],
                    ['Washington', 'WA'],
                    ['West Virginia', 'WV'],
                    ['Wisconsin', 'WI'],
                    ['Wyoming', 'WY'],
                ];

                if (to == 'abbr'){
                    input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                    for(let i = 0; i < states.length; i++){
                        if(states[i][0] == input){
                            return(states[i][1]);
                        }
                    }
                } else if (to == 'name'){
                    input = input.toUpperCase();
                    for(let i = 0; i < states.length; i++){
                        if(states[i][1] == input){
                            return(states[i][0]);
                        }
                    }
                }
            },
        },
        computed: {
            ...mapGetters('detailModal', ['isOpen', 'reservation']),
            openDateForm() {
                return Object.prototype.toString.call(this.reservation.pickupInformation.date) === '[object Date]'
            }
        },
        watch: {
            isOpen() {
                if (this.isOpen) {
                    this.$refs.modal.show();
                }
            },
            reservation() {
                this.state = this.abbrState(this.reservation.pickupInformation.state, 'abbr');
            }
        }
    }
</script>

<style scoped>

</style>

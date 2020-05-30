<template>
    <div class="container mx-auto">
        <div class="card">
            <!--information overview-->
            <div class="card-body">
                <!--customer-->
                <label class="title-header">Customer</label>
                <div class="flex flex-wrap mb-6">
                    <!--firstName-->
                    <div class="w-full sm:w-1/3 form-group">
                        <label class="label-header" > Name</label>
                        <label>{{form.customerInformation.firstName}} {{form.customerInformation.lastName}}</label>
                    </div>
                    <!--email-->
                    <div class="w-full sm:w-1/3 form-group">
                        <label class="label-header" >Email</label>
                        <label>{{form.customerInformation.email}}</label>
                    </div>
                    <div class="w-full sm:w-1/3 form-group">
                        <label class="label-header" >Phone Number</label>
                        <label>{{form.customerInformation.phone}}</label>
                    </div>
                </div>
                <label class="title-header">Vehicle</label>
                <div class="flex flex-wrap mb-6">
                    <!--vehicle-->
                    <div class="w-1/3 sm:w-auto sm:max-w-1/4 form-group">
                        <label class="label-header" >Year</label>
                        <label>{{form.vehicleInformation.year}}</label>
                    </div>
                    <div class="w-1/3 sm:w-auto sm:max-w-1/4 form-group">
                        <label class="label-header" >Make</label>
                        <label>{{form.vehicleInformation.make}}</label>
                    </div>
                    <div class="w-1/3 sm:w-auto sm:max-w-1/4 form-group">
                        <label class="label-header" >Model</label>
                        <label>{{form.vehicleInformation.model}}</label>
                    </div>
                </div>
                <!--pickup-->
                <label class="title-header">Pickup</label>
                <div class="flex flex-wrap mb-6">
                    <!--firstName-->
                    <div class="w-full sm:w-auto sm:max-w-3/4 form-group">
                        <label class="label-header" >Address</label>
                        <label>{{form.pickupInformation.street}}, {{form.pickupInformation.city}} {{state}} {{form.pickupInformation.zipcode}}</label>
                    </div>
                    <div class="w-1/2 sm:w-auto sm:max-w-1/2 form-group">
                        <label class="label-header" >Date</label>
                        <label>{{form.pickupInformation.date.toDateString()}}</label>
                    </div>
                    <div class="w-1/2 sm:w-auto sm:max-w-1/2 form-group">
                        <label class="label-header" >Time</label>
                        <label>{{form.pickupInformation.time}}</label>
                    </div>
                </div>
                <button @click="submitForm" class="success-button w-full">Submit Order</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        data() {
            return {
                state: '',
            }
        },
        created() {
            this.state = this.abbrState(this.form.pickupInformation.state, 'abbr');
        },
        methods: {
            ...mapActions('reservation', ['submitReservationForm']),
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
            submitForm() {
                this.submitReservationForm();
                this.$router.push('home');
            }
        },
        computed: {
            ...mapGetters('reservation', ['form'])
        }
    }
</script>

<style scoped>

</style>

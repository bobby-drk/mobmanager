<template>
    <div>
        <div class='row'>
            <div class="col-md-3">
                <participants></participants>
            </div>

            <div class="col-md-6">
                <div class='row'>
                    <div class="col-md-12">
                        <count-down></count-down>
                    </div>
                </div>

                <div class='row'>
                    <div class="col-md-12">
                        <div> tasks</div>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                notes
            </div>
        </div>

        <div class='row'>
            <div class="col-md-12">
                <i class="fa fa-info-circle" @click="adminOn"></i>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapMutations } from 'vuex'

    export default {
        methods: mapMutations({
            adminOn : 'setAdminDisplayOn',
        }),

    }
</script>

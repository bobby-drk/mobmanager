<template>
    <div>
        <div class='row'>
            <div class="col-sm-6">
                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Mob Settings
                        </h3>
                    </div>

                    <div class="panel-body">
                        Body stuff
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div>
                    <input-checkbox
                        :value="persist"
                        @input="togglePersist">
                    </input-checkbox> Use log term storage
                </div>
                <p>MobBoss is not responsible for loss of data.  Data is secure only to the extent needed by the MobBoss applicaiton.  Store sensitive information at your own risk.</p>
            </div>
        </div>
        <div class='row'>
            <div class="col-sm-4">

                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Timer Settings
                        </h3>
                    </div>

                    <div class="panel-body">
                        Body stuff
                    </div>
                </div>

            </div>
            <div class="col-sm-4">

                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Task Settings
                        </h3>
                    </div>

                    <div class="panel-body">
                        Body stuff
                    </div>
                </div>

            </div>
            <div class="col-sm-4">

                <div class="panel panel-warning ">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                            Note Settings
                        </h3>
                    </div>

                    <div class="panel-body">
                        Body stuff
                    </div>
                </div>

            </div>
        </div>
        <div class='row '>
            <div class="col-sm-12">
                <button class="btn btn-default btn-sm pull-right" @click="adminOff">Close</button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                persist: state => state.persist,
            }),
        },
        methods: {
            ...mapMutations({
                adminOff : 'setAdminDisplayOff',
                togglePersist: 'togglePersist'
            })
        }
    }
</script>

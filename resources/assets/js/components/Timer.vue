<template>
    <div class="panel panel-primary timerapp">
        <div class="panel-heading">
            <h3 class="panel-title">
                <span class="glyphicon glyphicon-time"></span>
                Timer
            </h3>
        </div>

        <div class="panel-body">

            <h2 class='counter'>{{ remaining }}</h2>

            <div class="btn-group block-center controllers" role="group" >
                <button
                     type="button"
                     class="btn btn-info btn-sm"
                     @click="timerStart"
                     v-if="paused">
                        <i class="fa fa-play"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    @click="paused = !paused"
                    v-else>
                        <i class="fa fa-pause"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="timerReset">
                        <i class="fa fa-stop"></i>
                </button>
            </div>
        </div>

    </div>
</template>

<script>

    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {

        computed: {
            remaining() {
                return moment(this.duration.asMilliseconds()).format('mm:ss')
            },
            ...mapState({
                duration: state => state.timer.duration,
                paused: state => state.timer.paused,
            }),
        },
        methods: {
            ...mapActions([
                'timerStart',
                'timerReset'
            ]),
            ...mapMutations([
                'timerBuildDuration',
            ]),
        },
        created() {
            this.timerBuildDuration()
        }
    }
</script>

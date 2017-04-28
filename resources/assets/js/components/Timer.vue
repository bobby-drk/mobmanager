<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
                Timer
            </h3>
        </div>

        <div class="panel-body">
            {{ remaining }}

            <div class="btn-group" role="group" aria-label="...">
                <button
                     type="button"
                     class="btn btn-default"
                     @click="startTimer"
                     v-if="paused">
                        <i class="fa fa-play"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-default"
                    @click="paused = !paused"
                    v-else>
                        <i class="fa fa-pause"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-default"
                    @click="resetTimer">
                        <i class="fa fa-stop"></i>
                </button>
            </div>
        </div>

    </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {

        data () {
            return {
                paused: true,
                duration: {},
                intervalObj:{}
            };
        },
        computed: {
            remaining() {
                return moment(this.duration.asMilliseconds()).format('mm:ss')
            },
            ...mapState({
                sessionLength: state => state.sessionLength,
            }),
        },
        methods: {
            startTimer() {
                let self = this
                let interval = 1000;
                this.paused = false;

                if (Object.keys(self.intervalObj).length === 0 && self.intervalObj.constructor === Object ) {

                    self.intervalObj = setInterval( function () {
                        if (!self.paused) {

                            if(self.duration._milliseconds > 0) {
                                self.duration = moment.duration(self.duration.asMilliseconds() - interval, 'milliseconds');
                            } else {
                                console.log("Time is up");
                                self.paused = true;
                                self.nextParticipant()
                            }
                        }
                    }, interval);

                }
            },
            resetTimer () {
                clearInterval(this.intervalObj)
                this.setDuration()
                this.paused = true;

            },
            setDuration () {
                this.duration = moment.duration(this.sessionLength * 60000, 'milliseconds')
            },
            nextParticipant () {
            }
        },
        created() {
            this.setDuration()
        }
    }
</script>

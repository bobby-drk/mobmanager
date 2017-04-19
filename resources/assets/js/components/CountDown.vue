<template>
    <div>
        <div >{{ remaining }}</div>

        <div class="field has-addons">
            <p class="control" v-if="paused">
                <a class="button is-small is-primary" @click="startTimer">
                    <span class="icon is-small">
                        <i class="fa fa-play"></i>
                    </span>
                </a>
            </p>
            <p class="control" v-else>
                <a class="button is-small is-primary" @click="paused = !paused" >
                    <span class="icon is-small">
                        <i class="fa fa-pause"></i>
                    </span>
                </a>
            </p>
            <p class="control">
                <a class="button is-small is-danger" @click="resetTimer">
                    <span class="icon is-small">
                        <i class="fa fa-stop"></i>
                    </span>
                </a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            sessionLength: {},
        },
        data () {
            return {
                // timerOn: false,
                paused: true,
                duration: {},
                intervalObj:{}
            };
        },
        computed: {
            remaining() {
                return moment(this.duration.asMilliseconds()).format('mm:ss');
            }
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
            }
        },
        created() {
            this.setDuration()
        }
    }
</script>

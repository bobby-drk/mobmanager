<template>
    <div>
        <div >{{ remaining }}</div>
        <a @click="startTimer">Start</a>
        <a @click="paused = !paused">pause {{ paused}}</a>
    </div>
</template>

<script>
    export default {
        props : {
            sessionLength: {},
        },
        data () {
            return {
                paused: false,
                duration: {}
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


                setInterval( function() {
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
        created() {
            this.duration = moment.duration(this.sessionLength * 60000, 'milliseconds');
        }
    }
</script>

<template>
    <div class='box'>
        <admin-panel
            v-if="showAdmin"
            v-on:closeAdmin="setAdminFalse">

        </admin-panel>
        <front-panel
            v-else
            :showAdmin="showAdmin"
            :sessionLength="sessionLength"
            :participants="participants"
            v-on:openAdmin="setAdminTrue">
        </front-panel>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showAdmin: false,
                participants: {},
                sessionLength: 1,
                tasks: {},
                notes: {},
            };
        },
        methods: {
            setAdminTrue () {
                this.showAdmin = true
            },
            setAdminFalse () {
                this.showAdmin = false
            }
        },
    }
</script>

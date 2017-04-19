<template>
    <section class="section">
        admin

        <p class="control">
            <button class="button is-primary" @click="hideAdmin">Close</button>
        </p>
    </section>
</template>

<script>
    export default {
        data () {
            return {

            };
        },
        methods: {
            hideAdmin () {
                this.$emit('closeAdmin')
            }
        },
    }
</script>

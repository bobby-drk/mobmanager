<template>
    <div class='custom-checkbox' @click="toggle(value)">
        <i class="fa" :class="value ? checkedClass : uncheckedClass"></i>
    </div>
</template>

<script>

    export default {
        props: ['value'],
        data () {
            return {
                uncheckedClass: "fa-square-o",
                checkedClass: "fa-check-square-o",
            }
        },
        methods: {
            toggle(value) {
                this.$emit('input', !value);
            },
        },
    }
</script>

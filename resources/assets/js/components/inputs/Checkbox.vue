<template>
    <div
        class="custom-checkbox"
        @click="toggle(value)"
        :style="'width:' + width+ 'px'"
        ref="theBox">
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
                height: "",
                width: "",
            }
        },
        methods: {
            toggle(value) {
                this.$emit('input', !value);
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.width = this.$refs.theBox.clientWidth + 5;
            })
        }
    }
</script>

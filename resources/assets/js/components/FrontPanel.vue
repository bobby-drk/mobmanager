<template>
    <div class='mob-board'>
        <div class='row bottom-buffer '>
            <div class="col-md-11">
                <h2 class="margin-manipulator-m" v-if="mobName || featureName">
                    <span v-if="!editMobName" @dblclick="editMobName = true">{{ mobName }} </span>

                    <input type="text"
                        class="header-edit"
                        v-focus
                        v-else
                        v-model="mobName"
                        @blur="editMobName = false"
                        @keyup.enter="editMobName = false"
                        @keyup.esc="editMobName = false" />

                    <span v-if="mobName && featureName">:</span>

                    <span v-if="featureName" @dblclick="editFeatureName = true">
                        <span v-if="!editFeatureName">{{ featureName }}</span>


                        <input type="text"
                            class="header-edit"
                            v-focus
                            v-else
                            v-model="featureName"
                            @blur="editFeatureName = false"
                            @keyup.enter="editFeatureName = false"
                            @keyup.esc="editFeatureName = false" />

                    </span>
                </h2>
            </div>
            <div class="col-md-1">
                <span class="glyphicon glyphicon-cog pull-right btn-admin" @click="adminOn"></span>
            </div>
        </div>
        <div class='row'>
            <div class="col-md-2">
                <mob-timer></mob-timer>
                <participants></participants>
            </div>

            <div class="col-md-5">
                <mob-tasks> tasks</mob-tasks>
            </div>

            <div class="col-md-5">
                <mob-notes></mob-notes>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapMutations, mapState } from 'vuex'

    export default {
        data () {
            return {
                editFeatureName: false,
                editMobName: false
            }
        },
        computed: {
            mobName: {
                get() { return this.$store.state.mobName},
                set(value) { this.$store.commit('setMobName', value) }
            },
            featureName: {
                get() { return this.$store.state.featureName},
                set(value) { this.$store.commit('setFeatureName', value) }
            },
        },
        methods: {
            ...mapMutations({
                adminOn : 'setAdminDisplayOn',
            }),
        },
        directives: {
            focus: {
                inserted(el) {
                  el.focus()
                }
            }
        }
    }
</script>

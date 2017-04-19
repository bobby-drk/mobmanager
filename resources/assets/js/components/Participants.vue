<template>
    <nav class="panel">
        <p class="panel-heading">Participants</p>

        <a class="panel-block is-active">
            <span class="panel-icon">
                <i class="fa fa-user-circle"></i>
            </span>
            bulma
        </a>

        <a class="panel-block">
            <span class="panel-icon">
                <i class="fa fa-book"></i>
            </span>
            marksheet
        </a>

        <a class="panel-block">
            <span class="panel-icon">
                <i class="fa fa-code-fork"></i>
            </span>
            mojs
        </a>

        <label class="panel-block">
            <input type="checkbox">
                Remember me
        </label>

        <div class="panel-block">
            <button class="button is-primary is-outlined is-fullwidth">
                Reset all filters
            </button>
        </div>
    </nav>
</template>

<script>
    export default {
        props: [
            'participants'
        ],
        data () {
            return {

            };
        },
    }
</script>

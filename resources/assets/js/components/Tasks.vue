<template>
    <div class="panel panel-primary tasksapp">
        <div class="panel-heading">
            <h3 class="panel-title">
                <span class="glyphicon glyphicon-tasks"></span>
                Tasks
                <i class="fa fa-plus pull-right" @click="addTask"></i>
            </h3>
        </div>

        <div class="panel-body" >

            <div ><small>{{ remaining | pluralize }} remaining: {{ remaining }}</small></div>
            <ul class="task-list">
                <li
                    v-for="(task, index) in filteredTasks"
                    class="list-group-item"
                    :class="[
                        severityClass(task.severity),
                        {
                            completed: task.completed,
                            editing: task == editedTask
                        }
                    ]"
                    @dblclick="editTask(task)"
                    ref="taskList">

                    <div class="view">

                        <input-checkbox
                            :name="'task_'+index"
                            @click="taskCompleted(task)"
                            v-model="task.completed">
                            {{ task.title }}
                        </input-checkbox>

                        <div class="btn-group pull-right button-bar" role="group">

                            <input-btn-rank
                                v-model="task.severity">
                            </input-btn-rank>
                            <button
                                 type="button"
                                 class="btn btn-default btn-xs"
                                 @click="editTask(task)">
                                    <i class="fa fa-pencil"></i>
                            </button>
                            <button
                                type="button"
                                class="btn btn-xs btn-danger"
                                @click="taskDelete(index)">
                                <i class="fa fa-close"></i>
                            </button>
                        </div>

                    </div>

                    <input class="edit" type="text"
                        v-model="task.title"
                        v-task-focus="task == editedTask"
                        @blur="doneEdit(task, index)"
                        @keyup.enter="doneEdit(task, index)"
                        @keyup.esc="cancelEdit(task)">

                 </li>
            </ul>

        </div>

        <div class="panel-footer" v-show="tasks.length" v-cloak>

            <div class="btn-group visibility" role="group">
                <button
                    type="button"
                    @click="visibility = 'all'"
                    class="btn btn-sm"
                    :class="visibility == 'all' ? classActive : classStandard">
                        All
                </button>

                <button
                    type="button"
                    @click="visibility = 'active'"
                    class="btn btn-sm"
                    :class="visibility == 'active' ? classActive : classStandard">
                        Active
                </button>

                <button
                    type="button"
                    @click="visibility = 'completed'"
                    class="btn btn-sm"
                    :class="visibility == 'completed' ? classActive : classStandard">
                        Completed
                </button>
            </div>

            <div class='pull-right clean-tasks ' @click="tasksRemoveCompleted" >
                <span class="glyphicon glyphicon-trash"></span>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import * as uuid from '../helpers/uuid'

    export default {
        data () {
            return {
                addingTask: false,
                editedTask: null,
                visibility: 'all',
                classActive: {
                    'btn-primary' : true,
                    'active' : true
                },
                classStandard: {
                    'btn-default' : true,
                    'active' : false
                },
                severityClasses: [
                    'list-group-item-success',
                    'list-group-item-info',
                    'list-group-item-warning',
                    'list-group-item-danger'
                ],
            }
        },
        watch: {
            tasks: {
                handler: _.debounce(function (e) {
                    this.tasksSync(e)
                }, 500),
                deep: true
            }
        },
        computed: {
            ...mapState({
                tasks: state => state.tasks,
                order: state => state.tasksOptions.order,
            }),
            filteredTasks () {

                this.tasks = this.optionalSortFilter(this.tasks)

                switch(this.visibility) {
                    case "all":
                        return this.tasks
                        break
                    case "active":
                        return this.tasks.filter(task => !task.completed)
                        break
                    case "completed":
                        return this.tasks.filter(task => task.completed)
                        break
                }
            },
            remaining () {
                return this.tasks.filter(task => !task.completed).length
            }

        },
        filters: {
            pluralize: function (n) {
                return n === 1 ? 'Task' : 'Tasks'
            }
        },
        methods: {
            ...mapMutations([
                'taskAdd',
                'taskDelete',
                'taskCompleted',
                'tasksRemoveCompleted',
                'tasksSync',
            ]),
            addTask () {
                this.addingTask = true;
                let key = uuid.generate()

                this.taskAdd({
                    title: '',
                    completed: false,
                    severity: 2,
                    key: key,
                    creation_date: moment().format("YYYYMMDDHHmmss")
                })

                this.$nextTick(() =>  this.editTask(this.getTasksByUuid(key)) )
            },
            editTask (task) {
                this.beforeEditCache = task.title
                this.editedTask = task
            },
            doneEdit (task, index) {
                if (!this.editedTask) {
                    return
                }
                this.editedTask = null
                task.title = task.title.trim()

                if (!task.title) {
                    this.$store.commit('taskDelete', index)
                    this.addingTask = false;
                }

                if(this.addingTask) {
                    this.addTask()
                }
            },
            cancelEdit (task) {
                this.editedTask = null
                task.title = this.beforeEditCache
            },
            severityClass(index) {
                return this.severityClasses[(index -1)]
            },
            optionalSortFilter (list) {
                if(this.order) {
                    return list.sort((a, b) => b.severity - a.severity)
                } else {
                    return list.sort((a, b) => b.creation_date - a.creation_date)
                }
            },
            getTasksByUuid(key) {

                return this.tasks.filter(task => task.key == key).shift()
            }

        },
        directives: {
            'task-focus'  (el, value) {
                if (value) {
                    el.focus()
                }
            }
        },
    }
</script>

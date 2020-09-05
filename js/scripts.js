new Vue({
    el: '#appVue',
    data: {
        tasks: [],
        newTask: ''
    },
    methods: {
        addTask: function () {
            this.tasks.push({ task: this.newTask, completed: true });
            this.newTask = '';
        }
    },
})
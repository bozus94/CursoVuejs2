
let urlUsers = 'https://randomuser.me/api/?results=10';
let urltodos = "https://jsonplaceholder.typicode.com/todos";

new Vue({
    el: '#appVue',
    created: function () {
        this.getInfo();
    },
    data: {
        users: [],
        todos : []
    },
    methods: {
        getInfo: function () {
            this.$http.get(urltodos).then(function (response) {
                this.todos = response.body
            });
        }
    }
})

/* 
    - Para usar ajax primero debemos importar la libreria vue-resources
*/
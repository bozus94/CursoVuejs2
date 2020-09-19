
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

          /* **** metodo para conectarnos usando vue-resource
            this.$http.get(urltodos).then(function (response) {
                this.todos = response.body
            }); */

        /* **** metodo para conectarnos usando axios */
            axios.get(urltodos).then(reponse => {
                this.todos = reponse.data
            })
        }
    }
})

/* 
    - Para usar ajax primero debemos importar la libreria vue-resources o axios
*/
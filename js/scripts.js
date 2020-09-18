new Vue({
    el: '#appVue',
    data: {
        people: ['Amanda', 'Natasha', 'Mario', 'lorezo'],
        name: ''
    },
    methods: {
        addName: function () {
            this.people.push(this.name)
            this.name = ""
        }
    },
})


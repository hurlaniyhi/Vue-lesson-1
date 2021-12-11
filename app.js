new Vue({
    el: '#vue-app',  // the id of the container
    data: {
        // data holds information(variables) that can be used in our html
        name: 'Ridwan',
        time: 'Afternoon',
        color: "blue",
        website: "https://rhydhur-tech.herokuapp.com",
        aTag: '<a href="https://gtaccount.herokuapp.com">Open an account</a>',
        age: 20,
        x: 0,
        y: 0,
        username: "",
        password: null,
        a: '',
        b: "",
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ["Aliyu", "Ridwan", "Haleemah", "Newton"],
        students: [
            {name: "Na'eem", class: "200level"},
            {name: "Ridwan", class: "graduated"},
            {name: "Hikmah", class: "HND 2"}
        ],
        myProfile: {
            name: "Ridwan",
            profession: "Software Engineer",
            skills: "Vue.js, React.js, Node.js, Firebase"
        }
    },
    methods: {  
        // methods hold the functions we will use in our application
        aboutMe: function(color){
            return `my name is ${this.name}, i love color ${color}`
        },
        greet: function(){
            return `Good ${this.time} ${this.name}`
        },
        add: function(increase){
            this.age = this.age + increase
        },
        substract: function(decrease){
            this.age -= decrease
        },
        updateXY: function(event){ 
            // event is the default objectI(properties) we get whenever an event occur on a particular html element
            // we can see the properties if we console log event

            this.x = event.offsetX
            this.y = event.offsetY
        },
        inform: function(){
            alert("You clicked me")
        },
        updateUsername: function(event){
            console.log(event)
            this.username = event.target.value
        },
        updatePassword: function(event){
            console.log(event)
            this.password = event.target.value
        },
        toggleClass: function(){
            this.available = !this.available
        }

        // we can access the info in the data property from the method property using the keyword this.keyOfTheInfo
        // like using this.name in any of our function in the methods property will give us the string Ridwan
    },

    computed: {
        addToA: function(){
            console.log("Entered addToA")
            return this.a + this.age
        },
        addToB: function(){
            console.log("Entered addToB")
            return this.b + this.age
        },
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})

// note that all info in the above vue instance can only be access by element inside the div with id of vue-app

// Data Binding
// To access the properties inside the data properties in our html file as element attribute, we use v-bind:attributeName
// e.g <a v-bind:href="keyOfTheDataProperty">Google<a> or <a :href="keyOfTheDataProperty">Google<a>

// To access any property inside the data property (whose value is an html tag) in the html file, we use v-html
// e.g let say we have a property myTag: '<a href="https://gtaccount.herokuapp.com">Open an account</a>', to use this
// inside the html file, we use <p v-html="myTag"></p>
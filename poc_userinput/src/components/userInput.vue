<template>
<div class="App">



<v-text-field input v-model="groepsnaam" placeholder="groepsnaam"></v-text-field>


<input type="radio" id="10" value="10" v-model="doel">
<label for="10">10 km</label>
<br>
<input type="radio" id="20" value="20" v-model="doel">
<label for="20">20 km</label>
<br>
<input type="radio" id="40" value="40" v-model="doel">
<label for="40">40 km</label>

<br>
<v-btn v-on:click="myFunction">Create</v-btn>


 </div>
</template>

<script>
  export default {
    name: 'userInput',
    data(){
      return{
        groepsnaam: "",
        doel: ""
      }
    },
    methods: {
        myFunction:function(){
            console.log({groepsnaam:this.groepsnaam, doel:this.doel})
        }
    }
  }
</script>

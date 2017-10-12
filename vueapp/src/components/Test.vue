<template>
  <div class="test">
    <!-- vmodel -->
    <input type="text" v-model="title"><br>
    <!-- HTML -->
    <span v-html="title"></span>
    <!-- 分支 -->
    <p v-if="showName">{{user.firstName}} {{user.lastName}}</p>
    <p v-else>Nobody</p>
    <!-- 循环 -->
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <!--  -->
    <button v-on:click="greet('helloworld!')" type="button" name="button">Say Greetings</button>
    <input v-on:keyup="pressKey" v-on:keyup.enter="enterHit" type="text" name="" value="">

    <hr/>

    <label for="">First Name</label><input v-model="user.firstName" type="text" name="" value=""><br>
    <label for="">Last Name</label><input v-model="user.lastName" type="text" name="" value="">

    <h3>{{fullname}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props:{
      msg:{
        type:String,
        default:'Foobar'
      }
    },
    data(){
      return {
        title:'<h1>Greetings!!!</h1>',
        user:{
          firstName:'Jonathan',
          lastName:'ZHU',
        },
        showName:true,
        items:[
          {title:"Apple"},
          {title:"Banana"},
          {title:"Watermelon"},
        ]
      }
    },
    methods:{
      greet:function(greeting){
        alert(greeting);
      },
      pressKey:function(e){
        console.log(e.target.value);
      },
      enterHit:function(){
        console.log("you hit enter!");
      }
    },
    computed:{
        fullname: function(){
          return this.user.firstName + " " +  this.user.lastName;
        }
    }
  }
</script>

<style scoped>

</style>

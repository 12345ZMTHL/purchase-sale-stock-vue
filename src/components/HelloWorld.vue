<template>
  <div class="hello">
    {{msg}}
    <button type="button" @click="huoqu">huoqu</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world'
    }
  },
  methods:{
    huoqu(){
      axios.get("localhost:80/productInfo/pageQuery").then(Response => console.log("shengg"))
      .catch(function (error) {
    console.log(error);
  });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="details container" id="customerdetails">
    <router-link to="/" class="btn btn-default">返回</router-link>

    <h1 class="page-header">
        {{customer.name}}

        <span class="pull-right">
          <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">
          编辑
          </router-link>
          <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)" style="margin-left:10px">
              删除</button>
        </span>
    </h1>
    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.email}}</span></li>
    </ul>

    <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.website}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.company.name}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.company.bs}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.address.city}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',
  data(){
      return{
          customer:{
              company:{},
              address:{}   //报错解决：[Vue warn]: Error in render: "TypeError: Cannot read property 'city' of undefined"
          },

          deleteCustomer(id){
              console.log(id);
            // this.$http.delete("http://localhost:3000/users/"+id)
            // .then(function(reponse){
            //  console.log(reponse);
            //  this.$route.push({path:"/",query:{alert:"用户删除成功!"}});
            // })
          }

      }
  },
  props: { 
  },
  methods:{
      fetchCustomers(id){
      this.$http.get('http://jsonplaceholder.typicode.com/users/'+id)
      .then(function(data){
          console.log(data);
        this.customer=data.body
      })
      }
  },
  created(){
      this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

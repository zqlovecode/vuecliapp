<template>
  <div class="customers container">
    <AAlert v-if="alert" v-bind:message="alert"></AAlert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model='filterInput'>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(customer,index) in filterBy(customers,filterInput)" v-bind:key="index">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import AAlert from './Alert.vue'

export default {
  name: 'customers',
  data(){
      return{
          customers:[],
          alert:'用户信息添加成功',
          filterInput:''
      }
  },
  components:{
      AAlert,
  },
  methods:{
      fetchCustomers(){
      this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then(function(data){
        //   console.log(data);
        this.customers=data.body
      })
      },

      filterBy(customers,value){
         return customers.filter(function(customer){
             return customer.name.match(value);
         })
      }
  },
  
  created(){
    //   if(this.$route.query.alert){
    //       this.alert=this.$route.query.alert;
    //   }
      this.fetchCustomers();
  },
  updated(){
      this.fetchCustomers();
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

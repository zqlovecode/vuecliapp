<template>
  <!-- <div v-theme="'wide'" id="show-blogs"> -->
  <div v-theme:column="'narrow'" id="show-blogs">
     <h1>博客总览</h1>
     <input type="text" v-model="search" placeholder="搜索">
     <!-- <div v-for="(blog,index) in blogs" v-bind:key="index" class="single-blog"> -->
     <div v-for="(blog,index) in filteredBlogs" v-bind:key="index" class="single-blog">
         <router-link v-bind:to="'/blog/'+blog.id">
         <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
         </router-link>
         <article>
             {{blog.body | snippet}}
         </article>
     </div>
  </div>
</template>

<script>

export default {
  name: 'show-blogs',
  data(){
      return{
           blogs:[],
           search:""
      }
  },
  created(){
    //   this.$http.get('http://jsonplaceholder.typicode.com/posts')
    //   .then(function(data){
    //       console.log(data);
    //       this.blogs=data.body.slice(0,10);
    //       console.log(this.blogs);
    //   })

     //引用本地文件
    this.$http.get('posts.json')
      .then(function(data){
        //   console.log(data);
          this.blogs=data.body.slice(0,10);
        //   console.log(this.blogs);
      })
  },

  computed:{
      filteredBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  },

  filters:{
      //第一种方法
    //   "to-uppercase":function(value){
    //       return value.toUpperCase()
    //   }

    //第二种方法
    toUppercase(value){
        return value.toUpperCase();
    }
  },
  directives:{
      'rainbow':{
          bind(el){
              el.style.color='#'+Math.random().toString(16).slice(2,8);
          }
      }
  }
}
</script>

<style>
   #show-blogs{
       max-width:800px;
       margin:0 auto;
   }
   .single-blog{
       padding:20px;
       margin:20px 0;
       box-sizing:border-box;
       background:#eee;
       border:1px dotted #aaa;
   }

   #show-blogs a{
       color:#444;
       text-decoration:none;
   }
   input[type="text"]{
       padding:8px;
       width:100%;
       box-sizing:border-box;
   }
</style>

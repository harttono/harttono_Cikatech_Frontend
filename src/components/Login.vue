<template>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 ">
          <img alt="bg" src="../assets/bg.png" style="width:100%;"/>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
            <form style="max-width:20rem;" class="mx-auto" @submit.prevent="login">
              <div class="mt-3">
                <h4>Welcome back</h4>
                 <h3 class="fw-bolder">Login to your account</h3>
              </div>
              <div class="mb-3 mt-4">
                <label for="username" class="form-label">Username : </label>
                <input v-model="username" type="text"  class="form-control" id="username">
              </div>

             <div class="mb-3">
                <label for="password" class="form-label">Password : </label>
                <input  v-model="password" type="password" class="form-control" id="password">
              </div>

                <div class="mb-3 d-flex align-items-center justify-content-between">
                  <label for="exampleCheck1"><input type="radio" class="form-check-input " id="exampleCheck1"> Remember me</label>
                  <label>Forgot password?</label>
                </div>

              <div class="mb-5">
                <button type="submit" class="btn submit w-100 btn-block"><span v-if="isloading">loading...</span><span v-else>Login now</span></button>
              </div>

              <div class="mx-auto">
                <span>Don't have an account? <router-link to="/register" class="navbar-brand">Register</router-link></span>
              </div> 

            </form>
        </div>
     </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data(){
    return{
      username:'',
      password:'',
      isloading:false
    }
  },
  methods:{
   async login(){
     try{
       this.isloading = true;
        const {data} = await axios.post(`https://wong801-portfolio.herokuapp.com/api/user/login`,{username:this.username,password:this.password});
        if(data){
          this.isloading = false;
          localStorage.setItem('user',JSON.stringify(data));
          this.$toast.success(data.msg);
          setTimeout(this.$toast.clear, 3000);
          this.$router.push('/post');
        }
     }catch(err){
       console.log(err);
       this.isloading = false;
     }
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .submit{
  background:#04C35C;
  color:#fefefe;
  padding:8px 0;
 }
  h4{
   font-weight:400;
   font-size:16px;
   color:#2D3748
 }
</style>

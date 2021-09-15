<template>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 ">
          <img alt="Vue logo" src="../assets/bg.png" style="width:100%;"/>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
            <form style="max-width:20rem;" class="mx-auto" @submit.prevent="register">
              <div class="mt-3">
                <h4>Get's Started</h4>
                 <h2 class="fw-bolder">Create Your Account</h2>
              </div>
              <div class="mb-3 mt-4">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1">
              </div>

              <div class="row align-items-center">
                <div class="col-6">
                  <label for="firstName" class="col-form-label">First Name : </label>
                  <input type="text" v-model="form.firstName" id="firstName" class="form-control">
                </div>
                <div class="col-6">
                   <label for="lastName" class="col-form-label">Last Name : </label>
                  <input type="text" v-model="form.lastName" id="lastName" class="form-control">
                </div>
              </div>

              <div class="mb-3">
                <label for="username" class="form-label">Username : </label>
                <input type="text" v-model="form.username" class="form-control" id="username">
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password : </label>
                <input type="password" v-model="form.password" class="form-control" id="password">
              </div>
 
              
              <div class="mt-5">
                <button type="submit" class="btn submit w-100 btn-block"><span v-if="isloading">loading...</span><span v-else>Submit</span></button>
              </div>

              <div class="mt-3 text-center">
                <span>Already have account ? <router-link to="/" class="navbar-brand">Login</router-link></span>
              </div>

            </form>
        </div>
     </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
   data(){
    return{
      form:{
        email:'',
        firstName:'',
        lastName:'',
        username:'',
        password:'',
      },
      isloading:false
    }
  },
  methods:{
   async register(){
     try{
        this.isloading = true;
        const {data} = await axios.post(`https://wong801-portfolio.herokuapp.com/api/user/register`,this.form     
        ); 
        if(data){
          localStorage.setItem('user',JSON.stringify(data));
          this.isloading = false;
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

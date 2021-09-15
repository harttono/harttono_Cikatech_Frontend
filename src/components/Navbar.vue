<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">
          <router-link to="/" class="navbar-brand">Logo</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="m-0 mx-3 users">
                  <li class="fw-bold">
                    {{user.msg.split(',')[1]}}
                  </li>
                  <li>
                    programmer
                  </li>
                </ul>
              </div>
              <div class="d-flex align-items-center">
                <button class="btn___logout" @click="logout" type="submit">Logout</button>
              </div>
          </form>
        </div>
      </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      user:JSON.parse(localStorage.getItem('user'))
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .btn___logout{
  background: #E95750;
  border-radius:5px;
  padding:4px 18px;
  display:inline-block;
  border:none;
  color:#fefefe;
 }
 .users{
   list-style:none;
 }
</style>

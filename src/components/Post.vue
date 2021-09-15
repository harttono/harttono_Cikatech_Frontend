<template>
  <div class="bg">
      <Navbar/>
      <div class="post-container">
        <h3>Update your activity</h3>
        <div class="form-floating mt-3">
            <textarea class="form-control" v-model="body" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 170px"></textarea>
            <label for="floatingTextarea2">How about your feeling?</label>
        <div class="floating__btn">
            <button class="btn btn__cancel mx-2" @click="cancelPost">Cancel</button>
            <button class="btn btn__post" @click="addpost"><span v-if="isloading">Loading...</span><span v-else>Post</span></button>
        </div>

        </div>

        <div class="posted" v-for="content in contents" :key="content">
            <span class="d-flex justify-content-between align-items-center mr-0 ">
              <h4>Josbar</h4>
              <button @click="deletePost(content)" >...</button>
            </span>
            <div>
              {{content}}
            </div>
            <p>17 Aug 2021,03:00 PM</p>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
export default {
  name: "Post",
  components: { Navbar},
  data(){
    return{
      body:'',
      contents:[],
      isloading:false,
      token:JSON.parse(localStorage.getItem('user'))
    }
  },
   methods:{
    deletePost(selected){
      var lastData = this.contents.filter( (content) => content !=selected);
      this.contents = lastData
    },
    cancelPost(){
      this.body = ''
    },
   async addpost(){
     try{
       this.isloading = true;
        const {data} = await axios.post(`https://wong801-portfolio.herokuapp.com/api/post/create`,{content:this.body},{
            headers: {
                authorization: `Bearer ${this.token.token}`
            }
        });
        if(data){
          this.isloading = false;
          this.contents.push(this.body);
          this.body ='';
          this.$toast.success(data.msg);
          setTimeout(this.$toast.clear, 3000);
        }
     }catch(err){
       console.log(err);
       this.isloading = false;
     }
    },
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
  background: #E5E5E5;
  min-height:100vh;
}
.post-container{
  max-width:700px;
  margin:30px auto;
  padding:12px;
}
.form-floating > .form-control{
    padding: 1.6rem 1.25rem !important;
}
.form-floating > label {
  padding: 1rem 1.25rem !important;
}

.post-container h3{
  font-family:'Roboto',sans-serif;
}
.floating__btn{
  position:absolute;
  bottom:14px;
  right:13px;
}
.floating__btn::before{
  content:'';
  position:absolute;
  border:1px solid #dedede;
  width:auto;
  left:0;
  bottom:55px;
}
.btn{
  padding:.175rem 1.80rem !important;
}
.btn__cancel {
  border:1px solid #2D3748;
}
.btn__post {
  background:#04C35C;
  color:#fefefe;
}
.posted{
  background:white;
  border-radius:3px;
  margin-top:12px;
}
.posted > span > h4 {
  font-family:'Roboto',sans-serif;
  padding:.8rem 0 0 1rem;
}
.posted > span > button{
  border:none;
  background:transparent;
  font-size:18px;
  font-weight:bolder;
  margin-right:12px;
}

.posted > div {
  margin:10px 65px 8px 1rem;
}

.posted >  p {
  margin-left:1rem;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
</style>

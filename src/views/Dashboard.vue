<template>

  <table class="data"  >
    
    <tr >
      <td class="content">Profile <button @click="goToHome()">Edit</button></td>
      
    </tr>
    <tr>
      <td class="content">
        PHOTO
      </td>
    </tr>
    <tr v-for="users in User" v-bind:key="users.bio">
      <td class="content">{{users.bio}}</td>
    </tr>
    <tr>
      <td class="content">BIO</td>
    </tr>
    <tr>
      <td class="content">PHONE</td>
    </tr>
    <tr>
      <td class="content">EMAIL</td>
    </tr>
    <tr>
      <td class="content">PASSWORD</td>
    </tr>
   
  </table>
</template>

<script>
import firebase from "firebase";
import router from "../router";
import "vuesax/dist/vuesax.css";
import axios from "axios";
export default {
  name: " dashboard",
  data: () => ({
    User: [],
  }),
  mounted() {
        axios.get('http://localhost:8081/user')
            .then((response) => {
                console.log(response.data);
                this.User = response.data;
                 console.log(this.User.bio);
            })
            .catch((error) => {
                console.log(error);
            });
    },

  methods: {
   goToHome(){
   this.$router.push('/editprofile'); 
      }
  }
  
};
</script>

<style scoped>
.data {
  width: 50%;
}

table {
  border-collapse: collapse;
  border-radius: 10px !important;
  border-style: hidden; /* hide standard table (collapsed) border */
  box-shadow: 0 0 0 1px rgb(196, 193, 194); /* this draws the table border  */
}

td {
  border: 1px solid rgb(196, 193, 194) !important;
}

table tr:first-child th:first-child {
  border-top-left-radius: 10px;
}

table tr:last-child td:first-child {
  border-top-right-radius: 10px;
}

table tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

table tr:last-child th:first-child {
  border-bottom-left-radius: 10px;
}

th {
  border: 1px solid #fbd2da !important;
  background: #f9a4b5;
}

th,
td {
  padding: 1em;
  border-bottom: 2px solid white;
}

body {
  margin: 1.5em;
}

.th-right {
  width: 20%;
  text-align: right;
  font-weight: 100;
  color: #fff;
  padding-right: 23px;
}

.content {
  color: #adadad;
  padding-left: 25px;
  text-align: left;
}
</style>

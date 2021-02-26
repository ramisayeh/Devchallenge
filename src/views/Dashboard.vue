<template>
   <div> <vs-button
        :active="active == 0"
        @click="active = 0"
      >
        Active
      </vs-button>
      </div>
</template>

<script>
import firebase from "firebase";
import router from "../router";
import 'vuesax/dist/vuesax.css';
    export default {
      data:() => ({
        active: 0
      }),
        name: " Dashboard",
        methods: 
        router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
})
        
    }
</script>

<style scoped>

</style>
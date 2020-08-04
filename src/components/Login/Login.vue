<template>
  <div class="flex justify-center">
    <div v-if="!loggedin" class="w-full max-w-xs  pt-10">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="font-bold text-3xl mb-3">Sign in</h1>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>          
          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
          <p v-if="error" class="text-red-500 text-xs italic">Invalid email or password</p>
        </div>
        <p class="text-xs mb-5">Don't have an account? <router-link to='/Signup' class="text-blue-600 hover:text-blue-800 text-xs" href="#">Sign up</router-link></p>  
        <div class="flex items-center justify-between">
          <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </div>
      </form>
    </div>
    <div v-if="loggedin" class="w-full max-w-xs  pt-10 flex flex-col">
      <p class="pt-5">Already signed in. Click the sign out button to signout</p>
      <div class="flex justify-center">
        <button @click="signout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {  
      email: "",
      password: "",  
      error: false,
      loggedin: false,
    };
  },
  watch: {
    email() {
      if (this.email != '') {
        this.error = false;
      }
    },
    password() {
      if (this.password != '') {
        this.error = false;
      }
    }
  },
  created() {
    var user = firebase.auth().currentUser;
      if (user) {
        this.loggedin = true;
      }  
  },
  methods: {
    submit() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((result)=> {
        var data = null;
        this.email = "";
        this.password = "";
        firebase.database().ref('/users/' + result.user.uid.toString()).once('value').then((snapshot) => {
          data = snapshot.val();
          this.$store.dispatch('setState', data);
          this.loggedin = true;
        });
      }).catch((error) =>{
        // Handle error.
        this.email = "";
        this.password = "";
        this.error = true;
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });   
    },
    signout() {
      
      firebase.auth().signOut().then(() => {
        console.log("signed out");
        this.loggedin = false;
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
};
</script>
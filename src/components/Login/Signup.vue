<template>
  <div class="flex justify-center">
    <div v-if="!done" class="w-full max-w-xs  pt-10">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="font-bold text-3xl mb-3">Register</h1>
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
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password2">
            Confirm Password
          </label>          
          <input v-model="password2" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password2" type="password" placeholder="******************">
        </div>
        <p v-if="error" class="text-red-600 mb-3 text-xs">{{errorMessage}}</p>
        <div class="flex items-center justify-between">
          <button @click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </div>
      </form>
    </div>
    <p v-if="done" class="font-bold text-3xl m-5">Sign up success!</p>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {  
      email: "",
      password: "",  
      password2: "",
      done: false,
      error: false,
      errorMessage: '',
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
    },
    password2() {
        if (this.password2 !='') {
            this.error = false;
        }
    }
  },
  methods: {
    submit() {
        if (this.password != this.password2) {            
            return 
        }
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
            this.done = true;
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            this.password = '';
            this.password2 = '';
            this.email = '';
            this.error = true;
            if (errorCode == 'auth/weak-password') {
                this.errorMessage = 'The password is too weak.';
            } else {
                this.errorMessage = errorMessage;
            }
        });
    }
  }
};
</script>
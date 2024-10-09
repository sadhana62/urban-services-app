<template>
    <div class="container mt-5">
      <h2 class="text-center">Register</h2>
      <form @submit.prevent="handleRegister" class="mt-4">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            v-model="name"
            class="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div class="form-group mt-3">
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
  
        <div class="form-group mt-3">
          <label for="password">Password:</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
  
        <div class="form-group mt-3">
          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            v-model="confirmPassword"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>
  
        <button type="submit" class="btn btn-primary mt-4 w-100">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterPage', // Multi-word component name to avoid linting issues
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      handleRegister() {
        // Validate form and handle the registration logic here
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
  
        // Example: Send the form data to the API or backend
        const formData = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
  
        console.log("Form submitted:", formData);
        // Here, you can send formData to your Flask API
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
  }
  </style>
  
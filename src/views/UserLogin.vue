<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <h2 class="text-center">Login</h2>
      
      <div class="form-group">
        <label for="username">Username or Mobile Number</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="form-control"
          placeholder="Enter your username or mobile number"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary btn-block">Login</button>

      <div class="text-center mt-3">
        <a href="#" @click="showRegister">Don't have an account? Register</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Implement your login logic here
      if (this.username && this.password) {
        // Example login logic
        console.log('Logging in with', this.username, this.password);
        // Reset the fields after login
        this.username = '';
        this.password = '';
        // Redirect or update state as needed
      }
    },
    showRegister() {
      // Implement logic to show register page or modal
      console.log('Redirecting to register page...');
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto; /* Center vertically and horizontally */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}
</style>

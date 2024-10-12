<template>
  <div class="register-container">
    <form @submit.prevent="handleRegister">
      <h2 class="text-center">Register</h2>
      
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="form-control"
          placeholder="Enter your username"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="mobile">Mobile Number</label>
        <input
          type="text"
          id="mobile"
          v-model="mobile"
          class="form-control"
          placeholder="Enter your mobile number"
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
          placeholder="Create a password"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          v-model="confirmPassword"
          class="form-control"
          placeholder="Confirm your password"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary btn-block">Register</button>

      <div class="text-center mt-3">
        <a href="#" @click="showLogin">Already have an account? Login</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    handleRegister() {
      // Implement your registration logic here
      if (this.password === this.confirmPassword) {
        console.log('Registering with', this.username, this.email, this.mobile, this.password);
        // Reset the fields after registration
        this.username = '';
        this.email = '';
        this.mobile = '';
        this.password = '';
        this.confirmPassword = '';
        // Redirect or update state as needed
      } else {
        alert('Passwords do not match');
      }
    },
    showLogin() {
      // Implement logic to show login page or modal
      window.location.href = '/login';
      console.log('Redirecting to login page...');
    }
  }
};
</script>

<style scoped>
.register-container {
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

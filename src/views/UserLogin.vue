<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" class="form-control" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="password" type="password" class="form-control" id="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Handle login logic here
    }
  }
};
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img :src="logo" alt="Household Services Logo" class="brand-logo">
        <div class="brand-text-container">
          <div class="brand-text">Household</div>
          <div class="brand-text">Services</div>
        </div>
      </a>

      <!-- Hamburger icon for mobile -->
      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Search and Location (Desktop) -->
      <div class="search-location-container mx-auto" v-if="!isMenuActive || windowWidth >= 992">
        <div class="location-container">
          <i class="fas fa-map-marker-alt"></i>
          <input type="text" class="location-input" placeholder="S/9, Fraser Road - Budh..." />
          <i class="fas fa-chevron-down"></i>
        </div>

        <div class="search-container">
          <i class="fas fa-search"></i>
          <input type="text" class="search-input" placeholder="Search for 'Kitchen cleaning'" />
        </div>
      </div>

      <!-- Navigation links (Toggle for mobile) -->
      <ul :class="['navbar-nav', 'ml-auto', { 'nav-active': isMenuActive }]" :style="menuStyle">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li v-if="!isLoggedIn" class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li v-if="!isLoggedIn" class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li v-if="isLoggedIn && role === 'customer'" class="nav-item">
          <router-link class="nav-link" to="/dashboard/customer">Customer Dashboard</router-link>
        </li>
        <li v-if="isLoggedIn && role === 'professional'" class="nav-item">
          <router-link class="nav-link" to="/dashboard/professional">Professional Dashboard</router-link>
        </li>
        <li v-if="isLoggedIn && role === 'admin'" class="nav-item">
          <router-link class="nav-link" to="/dashboard/admin">Admin Dashboard</router-link>
        </li>
        <li v-if="isLoggedIn" class="nav-item">
          <button class="nav-link btn btn-link" @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
    <router-view/>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-row">
        <!-- Company Section -->
        <div class="footer-column">
          <h5>Household Services</h5>
          <ul class="footer-links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Terms & conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Anti-discrimination policy</a></li>
            <li><a href="#">UC impact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <!-- For Customers Section -->
        <div class="footer-column">
          <h5>For customers</h5>
          <ul class="footer-links">
            <li><a href="#">UC reviews</a></li>
            <li><a href="#">Categories near you</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <!-- For Partners Section -->
        <div class="footer-column">
          <h5>For partners</h5>
          <ul class="footer-links">
            <li><a href="#">Register as a professional</a></li>
          </ul>
        </div>

        <!-- Social Links Section -->
        <div class="footer-column">
          <h5>Social links</h5>
          <div class="social-icons">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
          <div class="app-links">
            <a href="#" class="app-store"><img src="appstore.png" alt="Download on the App Store"></a>
            <a href="#" class="play-store"><img src="playstore.png" alt="Get it on Google Play"></a>
          </div>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="footer-bottom">
        <p>© Copyright 2024 Household Services. All rights reserved. | CIN: U74140DL2014PTC274413</p>
      </div>
    </div>
  </footer>


  </div>
</template>

<script>
import logo from '@/assets/logo.png'; // Import the logo image

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false, // Manage user login state
      role: '', // 'admin', 'customer', or 'professional' based on login
      logo, // Reference the imported logo
      isMenuActive: false, // Toggle menu visibility on mobile
      windowWidth: window.innerWidth, // Track window width
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    logout() {
      this.isLoggedIn = false;
      this.role = '';
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 992) {
        this.isMenuActive = false; // Automatically hide the menu when resizing back to desktop
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
  computed: {
    menuStyle() {
      if (this.windowWidth < 992) {
        return {
          display: this.isMenuActive ? 'block' : 'none',
        };
      }
      return {
        display: 'flex',
      };
    },
  },
};
</script>
<style scoped>
/* General Styles */
#app {
  margin: 0;
  padding: 0;
  color: gray;
}
.navbar-nav .nav-item {
  margin-right: 15px;
}

.brand-logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
  margin-left: 20px;
  border-radius: 5px;
}
.brand-text-container {
  display: inline-flex;
  flex-direction: column;
}
.brand-text {
  font-family: 'Arial', sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  color: gray;
}

/* Search and Location Containers */
.search-location-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.location-container,
.search-container {
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px 15px;
  margin-right: 10px;
}
.location-input,
.search-input {
  border: none;
  outline: none;
  background: none;
  width: 200px;
  font-size: 14px;
  color: #757575;
}

/* Navbar Links */
.navbar-nav.ml-auto {
  margin-left: auto;
}
.navbar-nav.nav-active {
  flex-direction: column;
  align-items: flex-start;
}
.nav-item .nav-link {
  margin-right: 15px;
}
.btn-link {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
.nav-item {
  color: gray;
}

/* Media Queries for Mobile */
@media (max-width: 991px) {
  .search-location-container {
    display: none;
  }
  .navbar-nav {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #f8f8f8;
  }
  .nav-item {
    margin: 10px 0;
  }
  .navbar-toggler {
    display: block;
    border: none;
  }
  .navbar-toggler-icon {
    width: 30px;
    height: 30px;
    background-color: gray;
    display: block;
  }
}

@media (min-width: 992px) {
  .navbar-toggler {
    display: none;
  }
  .navbar-nav {
    display: flex;
  }
}
.site-footer {
  background-color: #f8f8f8;
  padding: 40px 0;
  font-family: Arial, sans-serif;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-column {
  flex-basis: 22%;
  margin-bottom: 20px;
}

.footer-column h5 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #000;
}

.footer-links {
  list-style-type: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #333;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.social-icons a {
  display: inline-block;
  margin-right: 10px;
  color: #333;
  font-size: 20px;
}

.app-links a img {
  width: 150px;
  margin-top: 10px;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  font-size: 14px;
  color: #999;
}

/* Responsive Footer */
@media (max-width: 768px) {
  .footer-column {
    flex-basis: 48%;
    margin-bottom: 30px;
  }
}

@media (max-width: 480px) {
  .footer-column {
    flex-basis: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
  .footer-bottom {
    font-size: 12px;
  }
}


</style>
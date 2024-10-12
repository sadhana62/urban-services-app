<template>
  <div class="homepage-container">
    <!-- Left Section with Title and Service Categories -->
    <div class="left-section">
      <h1>Home services at your doorstep</h1>
      <div class="services-container">
        <p class="services-title">What are you looking for?</p>
        <div class="service-grid">
          <!-- Service cards dynamically rendered from services array -->
          <div class="service-card" v-for="service in services" :key="service.name">
            <img :src="service.icon" :alt="service.name" class="service-icon" />
            <p>{{ service.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section with Images -->
    <div class="right-section">
      <div class="image-grid">
        <!-- Service images dynamically rendered from images array -->
        <img v-for="(image, index) in images" :src="image" :alt="'Service Image ' + (index + 1)" :key="image" class="service-image" />
      </div>
    </div>

    <!-- New Section: Cards like in the image you provided -->
   
  </div>
  <div class="card-section">
      <!-- Dynamically render each card -->
      <div class="card" v-for="card in cards" :key="card.title">
        <div class="card-header" v-if="card.sale">{{ card.saleLabel }}</div>
        <img :src="card.image" :alt="card.title" class="card-image" />
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
        <button class="card-btn">{{ card.buttonText }}</button>
      </div>
    </div>
</template>



<script>
import womenFaceIcon from '@/assets/womenfacial.png'
import mensaving from '@/assets/mansaving.png'
import ac from '@/assets/ac.jpeg'
 import lock from '@/assets/lock.png'
import skewdriver from '@/assets/skewdriver.png'
import vaccume from '@/assets/vaccume.png'
import waterPuriyer from '@/assets/water-purifyer.png'
// import service1 from '@/assets/ser5.jpg'
import service2 from '@/assets/ser6.jpg'
import service4 from '@/assets/service4.jpg'
// import service5 from '@/assets/ser7.jpg'
import service6 from '@/assets/ser8.jpg'
import service7 from '@/assets/ser9.jpg'
import Ro from '@/assets/RO.png'
import SaveAC from '@/assets/SaveAC.png'
import Massage from '@/assets/massage.png'

export default {

  data() {
    return {
      // Replace these with actual image paths/icons for your services
      services: [
        { name: "Women's Salon & Spa", icon: womenFaceIcon },
        { name: "Men's Salon & Massage", icon: mensaving },
        { name: "AC & Appliance Repair", icon: ac},
        { name: "Cleaning", icon: vaccume},
        { name: "Electrician, Plumber & Carpenter", icon: skewdriver },
        { name: "Native Water Purifier", icon: waterPuriyer },
        { name: "Cleaning", icon: vaccume},
        { name: "Smart lock", icon: lock}
      ],
      // Replace these with actual image paths for service images
      images: [
      service6,
      service4,
      service7,
      service2,
      ],

      cards: [
        // Data for the card section
        {
          title: 'RO Water Purifiers',
          description: 'Pure water with advanced RO technology.',
          image: Ro,
          buttonText: 'Buy now',
          sale: true,
          saleLabel: 'Sale live',
        },
        {
          title: 'Power Saver AC Service',
          description: 'Save on electricity bills with our service.',
          image: SaveAC,
          buttonText: 'Book now',
        },
        {
          title: 'Relax at home',
          description: 'Get a refreshment.',
          image: Massage,
          buttonText: 'Book now',
        },
        {
          title: 'Power Saver AC Service',
          description: 'Save on electricity bills with our service.',
          image: SaveAC,
          buttonText: 'Book now',
        },
      ],
    };
  }
};
</script>
<style scoped>
.homepage-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: wrap; /* Ensure the content wraps on smaller screens */
}

/* Left section takes full width on mobile */
.left-section {
  width: 50%;
}

/* Right section adjusts to mobile */
.right-section {
  width: 45%;
}

.services-container {
  margin-top: 20px;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.services-title {
  font-weight: bold;
  margin-bottom: 20px;
}

/* Adjust the grid layout for smaller screens */
.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* For smaller devices, adjust to one column */
@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: 1fr;
  }

  .left-section, .right-section {
    width: 100%;
  }

  .homepage-container {
    flex-direction: column;
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.service-card img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}

/* Make the service images responsive */
.service-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.card-section {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap;
}

/* Make the cards responsive */
.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  padding: 15px;
  transition: transform 0.2s ease-in-out;
  position: relative;
  margin-bottom: 20px;
}

.card-header {
  position: absolute;
  background-color: green;
  color: white;
  padding: 5px;
  top: 10px;
  left: 10px;
  border-radius: 5px;
  font-size: 0.8em;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.card h3 {
  font-size: 1.2em;
  margin: 15px 0;
  color: #333;
}

.card-btn {
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.card-btn:hover {
  background-color: #0c6ebe;
}

/* Adjust card layout for smaller screens */
@media (max-width: 768px) {
  .card-section {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%; /* Make cards take full width on smaller screens */
  }
}

</style>


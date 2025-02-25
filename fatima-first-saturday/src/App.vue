<template>
  <div>
    <div class="top-banner">
      <nav>
        <a href="#">Fatima First Saturday Devotion</a>
        <a href="#">Marian Consecration</a>
        <a href="#">FAQ</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div class="consecration-text">
        <p>Put your family under the special protection of the Blessed Virgin Mary. Register your names.</p>
        <a href="#">Parish registration forms for download</a>
        <a href="#">For Parish encoding team</a>
        <a href="#">For Parish campaign team</a>
      </div>
    </div>

    <div class="large-picture">
      <img src="https://cmri.org/storage/2020/11/olfatima-bluesky2.jpg" alt="Fatima Image">
    </div>

    <div class="main-content">
      <div class="column">
        <h3>Start of Article on Fatima</h3>
        <p>...</p>
        <a href="#">Link to article on Marian apparitions</a>
      </div>
      <div class="column">
        <h3>Start of Article on First Sat Devotion</h3>
        <p>...</p>
        <a href="#">Link to article on Fatima messages</a>
      </div>
    </div>

    <div class="bottom-links">
      <a href="#">Consecration text</a>
      <a href="#">Announcements</a>
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">Gallery</a>
      <a href="#">Videos</a>
    </div>

    <div class="name-collection">
      <h2>Family Consecration Registration</h2>
      <form @submit.prevent="submitForm">
        <label for="zone">Zone:</label>
        <select id="zone" v-model="formData.zone" @change="updateArchDioceses">
          <option value="Metro Manila">Metro Manila</option>
          <option value="Luzon outside Metro Manila">Luzon outside Metro Manila</option>
          <option value="Cebu">Cebu</option>
          <option value="Visayas outside Cebu">Visayas outside Cebu</option>
          <option value="Davao city">Davao city</option>
          <option value="Mindanao outside Davao city">Mindanao outside Davao city</option>
        </select>

        <label for="archdiocese">Arch/Diocese:</label>
        <select id="archdiocese" v-model="formData.archdiocese" @change="updateParishes">
          <option v-for="diocese in dioceses" :key="diocese" :value="diocese">{{ diocese }}</option>
        </select>

        <label for="parish">Parish:</label>
        <select id="parish" v-model="formData.parish">
          <option v-for="parish in parishes" :key="parish" :value="parish">{{ parish }}</option>
        </select>

        <div v-for="(member, index) in formData.familyMembers" :key="index">
          <label :for="`name${index}`">Family Member Name:</label>
          <input type="text" :id="`name${index}`" v-model="member.name" required>
        </div>
        <button type="button" @click="addFamilyMember">Add Family Member</button>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
// import { supabase } from './supabaseClient';

const formData = reactive({
  zone: '',
  archdiocese: '',
  parish: '',
  familyMembers: [{ name: '' }],
});

const dioceses = ref([]);
const parishes = ref([]);

// Placeholder data - replace with Supabase data
const allDioceses = ref({
  'Metro Manila': ['Manila', 'Cubao', 'Pasay'],
  'Luzon outside Metro Manila': ['Lipa', 'Lucena'],
  // ... all other zones and dioceses
});

const allParishes = ref({
  'Manila': ['Manila Cathedral', 'Quiapo Church'],
  'Cubao': ['Cubao Cathedral'],
  // ... all other dioceses and parishes
});


onMounted(async () => {
    // Fetch data from Supabase here and populate allDioceses and allParishes
    // Example (adapt to your Supabase schema):
    // const { data, error } = await supabase.from('philippine_parishes').select('*')
    // if (data) {
    //   // Process data and create the nested structure for allDioceses and allParishes
    //   // Example (adapt to your specific needs):
    //   const diocesesByZone = {};
    //   const parishesByDiocese = {};
    //   data.forEach(item => {
    //     if (!diocesesByZone[item.zone]) {
    //       diocesesByZone[item.zone] = [];
    //     }
    //     if (!parishesByDiocese[item.diocese]) {
    //       parishesByDiocese[item.diocese] = [];
    //     }
    //     if (!diocesesByZone[item.zone].includes(item.diocese)) {
    //       diocesesByZone[item.zone].push(item.diocese);
    //     }
    //     parishesByDiocese[item.diocese].push(item.parish);
    //   });
    //   allDioceses.value = diocesesByZone;
    //   allParishes.value = parishesByDiocese;
    // } else if (error) {
    //   console.error("Error fetching data:", error);
    // }
});

const updateArchDioceses = () => {
  dioceses.value = allDioceses.value[formData.zone] || [];
  formData.archdiocese = '';
  parishes.value = [];
};

const updateParishes = () => {
  parishes.value = allParishes.value[formData.archdiocese] || [];
  formData.parish = '';
};

const addFamilyMember = () => {
  formData.familyMembers.push({ name: '' });
};
/*
const submitForm = async () => {
  try {
    const { error } = await supabase
      .from('consecration_registrations')
      .insert([formData]);

    if (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } else {
      alert('Form submitted successfully!');
      // Reset the form (using reactive data reset):
      Object.assign(formData, {
        zone: '',
        archdiocese: '',
        parish: '',
        familyMembers: [{ name: '' }],
      });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again later.');
  }
};
/*
</script>

<style scoped>
/* Basic styling - Customize as needed */
.top-banner { /* ... */ }
.large-picture { /* ... */ }
.main-content { /* ... */ }
.column { /* ... */ }
.bottom-links { /* ... */ }
.name-collection { /* ... */ }
</style>
import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Home from './components/Home.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('home', Home)
app.mount('#app')
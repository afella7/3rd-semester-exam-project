import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { createRouter, createWebHistory } from 'vue-router';
import Counter from './components/Counter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/counter",
        name: "Counter",
        component: Counter,
    }]
})
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')

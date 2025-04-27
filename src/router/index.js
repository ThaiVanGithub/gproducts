import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import Blank from '@/pages/Blank.vue'
import Contact from "@/pages/Contact.vue";
import Products from "@/pages/Products.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products
    },
    {
        path: '/Blank',
        name: 'Blank',
        component: Blank
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
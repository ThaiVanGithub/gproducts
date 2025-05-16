import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import Cart from '@/pages/Cart.vue'
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
        path: '/Cart',
        name: 'Cart',
        component: Cart
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
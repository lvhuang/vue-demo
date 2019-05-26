import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import PageA from '../pages/page_a'
import PageB from '../pages/page_b'
import PageC from '../pages/page_c'
const routes = [
    { path: '/', redirect: '/A' },
    { path: '/A', component: PageA },
    { path: '/B', component: PageB },
    { path: '/C', component: PageC },
]

export default new VueRouter({
    routes
})

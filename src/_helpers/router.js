import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';

Vue.use(Router);

export const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/login', name: 'login', component: LoginPage},
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});

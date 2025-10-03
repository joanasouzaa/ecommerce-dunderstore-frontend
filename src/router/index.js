import {createRouter, createWebHistory} from 'vue-router';

import LoginViewAdmin from "../views/admin/LoginView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: 'login',
            component: LoginViewAdmin,
        }
    ]
});

export default router;
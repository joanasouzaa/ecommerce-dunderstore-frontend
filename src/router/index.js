import {createRouter, createWebHistory} from 'vue-router';

import LoginAdminView from "../views/admin/LoginAdminView.vue";
import DashboardAdminView from '../views/admin/DashboardAdminView.vue';
import ProdutctsAdminView from '../views/admin/ProdutctsAdminView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/admin/login",
            name: 'login',
            component: LoginAdminView,
        },
        {
            path: "/admin/dashboard",
            name: "dashboard",
            component: DashboardAdminView
        },
        {
            path: "/admin/produtos",
            name: "produtos",
            component: ProdutctsAdminView

        }
    ]
});

export default router;
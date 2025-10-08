import {createRouter, createWebHistory} from 'vue-router';

import LoginAdminView from "../views/admin/LoginAdminView.vue";
import DashboardAdminView from '../views/admin/DashboardAdminView.vue';
import ProdutctsAdminView from '../views/admin/ProdutctsAdminView.vue';
import OrdersAdminView from '../views/admin/OrdersAdminView.vue';
import ClientsAdminView from '../views/admin/ClientsAdminView.vue';
import CouponAdminView from '../views/admin/CouponAdminView.vue';

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
            name: "products",
            component: ProdutctsAdminView

        },
        {
            path: "/admin/pedidos",
            name: "orders",
            component: OrdersAdminView
        },
        {
            path: "/admin/clientes",
            name: "clients",
            component: ClientsAdminView
        },
        {
            path: "/admin/cupons",
            name: "coupon",
            component: CouponAdminView
        }
    ]
});

export default router;
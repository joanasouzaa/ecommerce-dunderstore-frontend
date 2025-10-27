import { createRouter, createWebHistory } from 'vue-router';

import HomeView from "../views/default/HomeView.vue";
import LoginAdminView from "../views/admin/LoginAdminView.vue";
import DashboardAdminView from '../views/admin/DashboardAdminView.vue';
import ProdutctsAdminView from '../views/admin/ProductsAdminView.vue';
import OrdersAdminView from '../views/admin/OrdersAdminView.vue';
import ClientsAdminView from '../views/admin/ClientsAdminView.vue';
import CouponAdminView from '../views/admin/CouponAdminView.vue';
import CategoriesAdminView from '../views/admin/CategoriesAdminView.vue';
import CategoryView from '../views/default/CategoryView.vue';
import ProductView from '../views/default/ProductView.vue';
import CartView from '../views/default/CartView.vue';
import CheckoutView from '../views/default/CheckoutView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta:{
                layout: "client"
            }
        },

        {
            path: '/admin/login',
            name: 'login',
            component: LoginAdminView,
            meta: {
                layout: "none"
            }
        },

        {
            path: "/admin/dashboard",
            name: "dashboard",
            component: DashboardAdminView,
            meta:{
                layout: "admin"

            }
        },
        {
            path: "/admin/produtos",
            name: "products",
            component: ProdutctsAdminView,
            meta:{
                layout: "admin"
            }

        },
        {
            path: "/admin/categorias",
            name: "categories",
            component: CategoriesAdminView,
            meta:{
                layout: "admin"
            }
        },
        {
            path: "/admin/pedidos",
            name: "orders",
            component: OrdersAdminView,
            meta:{
                layout: "admin"
            }
        },
        {
            path: "/admin/clientes",
            name: "clients",
            component: ClientsAdminView,
            meta:{
                layout: "admin"
            }
        },
        {
            path: "/admin/cupons",
            name: "coupon",
            component: CouponAdminView,
            meta:{
                layout: "admin"
            }
        },
        {
            path: "/categoria",
            name: "category",
            component: CategoryView,

            
        },
        {
            path: "/produto",
            name: "product",
            component: ProductView,
         
        },
        {
            path: "/carrinho",
            name: "cart",
            component: CartView,
        },
        {
            path: "/checkout",
            name: "checkout",
            component: CheckoutView,
            meta: {
                layout: "checkout"
            }
        }
    ]
});

export default router;
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dashboard.vue')
            },
            {
                path: '/lihat-kategori',
                name: 'lihat-kategori',
                component: () => import('./components/kategori/Lihat.vue')
            },
            {
                path: '/tambah-kategori',
                name: 'tambah-kategori',
                component: () => import('./components/kategori/Tambah.vue')
            },
            {
                path: '/menu',
                component: () => import('./components/MenuDemo.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('./components/menu/PersonalDemo.vue')
                    },
                    {
                        path: '/menu/seat',
                        component: () => import('./components/menu/SeatDemo.vue')
                    },
                    {
                        path: '/menu/payment',
                        component: () => import('./components/menu/PaymentDemo.vue')
                    },
                    {
                        path: '/menu/confirmation',
                        component: () => import('./components/menu/ConfirmationDemo.vue')
                    },
                ],
            },
            {
                path: '/messages',
                name: 'messages',
                component: () => import('./components/MessagesDemo.vue')
            },
            {
                path: '/file',
                name: 'file',
                component: () => import('./components/FileDemo.vue')
            },
            {
                path: '/chart',
                name: 'chart',
                component: () => import('./components/ChartDemo.vue')
            },
            {
                path: '/misc',
                name: 'misc',
                component: () => import('./components/MiscDemo.vue')
            },
            {
                path: '/crud',
                name: 'crud',
                component: () => import('./pages/CrudDemo.vue')
            },
            {
                path: '/timeline',
                name: 'timeline',
                component: () => import('./pages/TimelineDemo.vue')
            },
            {
                path: '/empty',
                name: 'empty',
                component: () => import('./components/EmptyPage.vue')
            },
            {
                path: '/documentation',
                name: 'documentation',
                component: () => import('./components/Documentation.vue')
            },
            {
                path: '/blocks',
                name: 'blocks',
                component: () => import('./components/BlocksDemo.vue')
            },
            {
                path: '/icons',
                name: 'icons',
                component: () => import('./components/IconsDemo.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('./pages/LandingDemo.vue')
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

// router.beforeEach((to, from, next) => {
//     const { authorize } = to.meta;
//     if(localStorage.getItem('auth')){
//         User.profile().then(response =>{
//             let Userdata = response.data;
//             if (authorize == 'Vendor') {
                
//                 if(response.status === 401){
//                     return next({ path: '/login', query: { returnUrl: to.path } });
//                 }
//                 if(Userdata.is_vendor == true){
//                     next();
//                 }else{
//                     return next({ path: '/login', query: { returnUrl: to.path } });
//                 }
//             }else if(authorize == 'MustLogin'){
//                 if(!localStorage.getItem('auth')){
//                     return next({ path: '/login', query: { returnUrl: to.path } });
//                 }else{
//                     next();
//                 }
//             }else{
//                 next();
//             }
//         });
//     }else{
//         if(authorize == 'MustLogin'){
//             return next({ path: '/login', query: { returnUrl: to.path } });
//         }else{
//             if (authorize == 'Vendor') {
//                 if(!localStorage.getItem('auth')){
//                     return next({ path: '/login', query: { returnUrl: to.path } });
//                 }
//             }
//             next();
//         }
        
//     }
// })
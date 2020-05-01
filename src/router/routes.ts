import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/AdminByntq',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminByntq/home/DataBarang.vue') },
      { path: 'inputdatabarang', component: () => import('pages/AdminByntq/home/InputDataBarang.vue') },
      { path: 'datatransaksi', component: () => import('pages/AdminByntq/Transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/Pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pembeli/DataBarang/DataBarang.vue') },
      { path: 'Transaksi', component: () => import('pages/Pembeli/Transaksi/DataTransaksi.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

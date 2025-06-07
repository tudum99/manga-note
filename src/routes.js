import MainLayout from './MainLayout.vue'

const routes = [
  {
    path: '/:catchAll(.*)*',   // catch all routes
    component: MainLayout,
    children: [
    ]
  }

]

export default routes

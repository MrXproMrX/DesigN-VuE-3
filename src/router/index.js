import { createRouter, createWebHashHistory } from 'vue-router'
import IndexViews from '@/views/IndexViews.vue'
import videoViews from '@/components/video/video.vue'
import AcademyViews from '../views/AcademyViews'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexViews
  },

  {
    path: '/video',
    name: 'video',
    component: videoViews
  },

  {
    path: '/academy/:id',
    name: 'academy',
    component: AcademyViews
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

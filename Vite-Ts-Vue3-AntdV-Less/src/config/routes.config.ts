import Index from '../views/index/index.vue'
import User from '../views/user/index.vue'

const routes: any[] = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/user',
    component: User
  }
]

export default routes

import home from "./Home.vue"
import description from "./Description.vue"
import profile from "./Profile.vue"

export const routes = [
  { path: '/', component: home},
  { path: '/description', component: description},
  { path: '/profile', component: profile}
]
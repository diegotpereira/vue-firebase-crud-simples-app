import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'add',
        component: () => import ('../components/UsuarioCriar')
    },
    {
        path: '/lista',
        name: 'lista',
        component: () => import ('../components/UsuarioLista')
    },
    {
        path: '/editar/:id',
        name: 'editar',
        component: () => import ('../components/UsuarioEditar')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
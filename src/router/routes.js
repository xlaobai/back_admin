import lazyLoading from './lazyLoading'

export default [
    {
        name: 'home',
        path: '/home',
        component: lazyLoading('home'),
        children: [
            {
                name: 'admin',
                path: 'admin',
                component: lazyLoading('admin/list')
            }
        ] 
    },
    {
        name: 'login',
        path: '/login',
        component: lazyLoading('auth/login')
    },
    {
        path: "*",
        redirect: "/login"
    }
]
import lazyLoading from './lazyLoading'

export default [
    {
        name: 'home',
        path: '/home',
        component: lazyLoading('home'),
        children: [
            {
                name: 'adminIndex',
                path: 'admin/index',
                component: lazyLoading('admin/list')
            },
            {
                name: 'adminAdd',
                path: 'admin/add',
                component: lazyLoading('admin/add')
            },
            {
                name: 'adminEdit',
                path: 'admin/edit/:id',
                component: lazyLoading('admin/edit')
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
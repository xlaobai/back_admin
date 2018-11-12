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
            },
            {
                name: 'navIndex',
                path: 'nav/index',
                component: lazyLoading('nav/list')
            },
            {
                name: 'navAdd',
                path: 'nav/add',
                component: lazyLoading('nav/add')
            },
            {
                name: 'navEdit',
                path: 'nav/edit/:id',
                component: lazyLoading('nav/edit')
            },
            {
                name: 'articleIndex',
                path: 'article/index',
                component: lazyLoading('article/list')
            },
            {
                name: 'articleAdd',
                path: 'article/add',
                component: lazyLoading('article/add')
            },
            {
                name: 'articleEdit',
                path: 'article/edit/:id',
                component: lazyLoading('article/edit')
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
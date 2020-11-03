export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: 'search',
            component: () => import('@/components/Search')
        },
        {
            path:'detail/1/movieId',
            components:{
                default: ()=>{'@/components/NowPlaying'},
                detail:()=>import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            path:'detail/2/movieId',
            components:{
                default: ()=>{'@/components/ComingSoon'},
                detail:()=>import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            // 重定向到movie页面
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}
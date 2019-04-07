import React from 'react'

// import RecentPosts from './containers/RecentPosts/RecentPosts'
import Home from './containers/Home/Home'
import AllPosts from './containers/AllPosts/AllPosts'
import Work from './containers/Work/Work'
import ContactForm from './containers/ContactForm/ContactForm'
import FullPost from './components/FullPost/FullPost'

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/post/:postId',
        component: FullPost,
    },
    {
        path: '/posts',
        component: AllPosts,
    },
    {
        path: '/work',
        component: Work,
    },
    {
        path: '/hire',
        component: ContactForm,
    }

]
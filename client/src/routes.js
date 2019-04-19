import React from 'react'
import Home from './containers/Home/Home'

import DynamicImport from './helpers/DynamicImport'

const AllPosts = (props) => (
    <DynamicImport load={(props) => import('./containers/AllPosts/AllPosts')}>
        {(Component) => Component === null
        ? <h1>loading...</h1> :
        <Component {...props} />}
    </DynamicImport>
)

const Work = (props) => (
    <DynamicImport load={(props) => import('./containers/Work/Work')}>
        {(Component) => Component === null
        ? <h1>loading...</h1> :
        <Component {...props} />}
    </DynamicImport>
)

const ContactForm = (props) => (
    <DynamicImport load={(props) => import('./containers/ContactForm/ContactForm')}>
        {(Component) => Component === null
        ? <h1>loading...</h1> :
        <Component {...props} />}
    </DynamicImport>
)

const FullPost = (props) => (
    <DynamicImport load={(props) => import('./components/FullPost/FullPost')}>
        {(Component) => Component === null
        ? <h1>loading...</h1> :
        <Component {...props} />}
    </DynamicImport>
)

const User = (props) => (
    <DynamicImport load={(props) => import('./containers/User/index')}>
        {(Component) => Component === null
        ? <h1>loading...</h1> :
        <Component {...props} />}
    </DynamicImport>
)



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
    },
    {
        path: '/user',
        component: User
    }

]
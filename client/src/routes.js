import React from 'react'
import Home from './containers/Home/Home'

import DynamicImport from './helpers/DynamicImport'
import jwtDecode from 'jwt-decode'

// BACKUP IF DYNAMICIMPORT STARTS ACTING UP
// import AllPosts from './containers/AllPosts/AllPosts'
// import Work from './containers/Work/Work'
// import ContactForm from './containers/ContactForm/ContactForm'
// import FullPost from './components/FullPost/FullPost'
// import User from './containers/User/index'


let checkForAdmin = () => {
    let dashboard_route = null
    if (localStorage.Authorization) {
        let token = localStorage.Authorization.split(' ')
         const { role }= jwtDecode(token[1])
    
         if (role === 'admin') {
            const dashboard_route = '/dashboard'
        }     
    }

    return dashboard_route
}


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

const Dashboard = (props) => (
    <DynamicImport load={(props) => import('./containers/DashBoard/index')}>
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
        component: FullPost
    },
    {
        path: '/posts',
        component: AllPosts
    },
    {
        path: '/work',
        component: Work
    },
    {
        path: '/hire',
        component: ContactForm
    },
    {
        path: '/user',
        component: User
    }
    // {
    //     path: '/dashboard',
    //     component: Dashboard
    // }

]
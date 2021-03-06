import React from 'react'
import Home from './containers/Home/Home'
import DynamicImport from './helpers/DynamicImport'
import Spinner from './components/UI/Spinner/Spinner'

// BACKUP IF DYNAMICIMPORT STARTS ACTING UP
// import AllPosts from './containers/AllPosts/AllPosts'
// import Work from './containers/Work/Work'
// import ContactForm from './containers/ContactForm/ContactForm'
// import FullPost from './components/FullPost/FullPost'
// import User from './containers/User/index'

const AllPosts = (props) => (
    <DynamicImport load={(props) => import('./containers/AllPosts/AllPosts')}>
        {(Component) => Component === null
        ? <Spinner /> :
        <Component {...props} />}
    </DynamicImport>
)

const Work = (props) => (
    <DynamicImport load={(props) => import('./containers/Work/Work')}>
        {(Component) => Component === null
        ? <Spinner /> :
        <Component {...props} />}
    </DynamicImport>
)

const ContactForm = (props) => (
    <DynamicImport load={(props) => import('./containers/ContactForm/ContactForm')}>
        {(Component) => Component === null
        ? <Spinner /> :
        <Component {...props} />}
    </DynamicImport>
)

const FullPost = (props) => (
    <DynamicImport load={(props) => import('./components/FullPost/FullPost')}>
        {(Component) => Component === null
        ? <Spinner /> :
        <Component {...props} />}
    </DynamicImport>
)

const User = (props) => (
    <DynamicImport load={(props) => import('./containers/User/index')}>
        {(Component) => Component === null
        ? <Spinner /> :
        <Component {...props} />}
    </DynamicImport>
)

const Dashboard = (props) => (
    <DynamicImport load={(props) => import('./containers/User/Admin/DashBoard/index')}>
        {(Component) => Component === null
        ? <Spinner /> :
        <Component {...props} />}
    </DynamicImport>
)

const EditPost = (props) => (
    <DynamicImport load={(props) => import('./containers/User/Admin/DashBoard/EditPost/EditPost')}>
        {(Component) => Component === null
        ? <Spinner /> :
        <Component {...props} />}
    </DynamicImport>
)

const Profile = (props) => (
    <DynamicImport load={(props) => import('./containers/User/Profile/Profile')}>
        {(Component) => Component === null
        ? <Spinner /> :
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
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/editpost',
        component: EditPost
    },
    {
        path: '/profile',
        component: Profile
    }

]
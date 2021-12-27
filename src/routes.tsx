import { Fragment } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import AuthGuard from "./components/AuthGuard"
import GuestGuard from "./components/GuestGuard"
import SignIn from "./components/SignInForm/index"
import NewPost from "./components/NewPost/index"
import Setting from "./components/Setting/index"
import ArticlePage from "./components/ArticlePage/index"
import ProfilePage from "./components/ProfilePage/index"
import Error from "./views/errors"
import AppContent from "./components/Content"
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import {routes as routesType, route as routeTypes} from "./stores/type" 
import SignUp from "./components/SignUpForm"


export const renderRoute = (routes: routesType = []) => (
    <Switch>
        {routes.map((route: routeTypes, i) => {
            const Guard = route.guard || Fragment
            const Component = route.component
            const Layout = route.layout || Fragment
            return (
                <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                    <Layout>
                        <Guard>
                            {
                                route.routes ? (
                                    renderRoute(route.routes)
                                ) : (
                                    <Component {...props}/>
                                )
                            }
                        </Guard>
                    </Layout>
                )}
                />
            )
        })}
    </Switch>

)

const routes = [
    {
        exact: true,
        path: '/404',
        component: Error
    },
    {
        exact: true,
        guard: GuestGuard,
        layout: AuthLayout,
        path: '/signin',
        component: SignIn,
    },
    {
        exact: true,
        guard: GuestGuard,
        layout: AuthLayout,
        path: '/signup',
        component: SignUp,
    },
    {
        path: "/editor",
        guard: AuthGuard,
        layout: MainLayout,
        routes: [
            {
                exact: true,
                path: "/editor",
                component: NewPost
            },
            {
                exact: true,
                path: "/editor/:id",
                component: NewPost
            },
        ]
    },
    {
        guard: AuthGuard,
        exact: true,
        path: "/setting",
        layout: MainLayout,
        component: Setting
    },
    {
        guard: AuthGuard,
        exact: true,
        path: "/article/:id",
        component: ArticlePage
    },
    {
        guard: AuthGuard,
        exact: true,
        layout: MainLayout,
        path: "/profile/:username",
        component: ProfilePage,
    },
    {
        path: "/",
        exact: true,
        // guard: GuestGuard,
        layout: MainLayout,
        component: AppContent
    },
    {
        path: "*",
        routes: [
            {
                exact: true,
                path: "/",
                component: () => <Redirect to="/"/>
            },
            {
                component: () => <Redirect to="/404"/>
            }
        ]
    }
]

export default routes
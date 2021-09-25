import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { isAuthenticated, isAuthenticatedAdmin } from '../src/auth'
import Navbar from './components/Navbar'
import Footer from './components/Footer/index'

// Rotas públicas
import Index from './pages/Index'
import Login from './pages/Login'

// Rotas privadas
import Home from './pages/Home'

// Rotas privadas de admin

export default function Routes(){

    const PublicRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            !isAuthenticated() || isAuthenticated() ? (
                <Component {...props} />   
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
            )
        )}/>
    )
    
    const AdminRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            isAuthenticatedAdmin() ? (
                <Component {...props} />   
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
            )
        )}/>
    )

    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                {/* <PublicRoute exact path='/' component={Index}/> */}
                <PublicRoute exact path='/' component={() => <h1>Index</h1>}/>
                <PublicRoute exact path='/home' component={() => <h1>Home</h1>}/>
                <PublicRoute exact path='/about' component={() => <h1>About</h1>}/>
                <PublicRoute exact path='/services' component={() => <h1>Services</h1>}/>
                <PublicRoute exact path='/contact-us' component={() => <h1>Contact Us</h1>}/>
                <PublicRoute exact path='/sign-up' component={() => <h1>Sign Up</h1>}/>
                <PublicRoute exact path='/sign-in' component={Login}/>
                {/* <AdminRoute exact path='/home' component={Home}/> */}
                <AdminRoute exact path='/admin' component={() => <h1>Rota admin</h1>}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
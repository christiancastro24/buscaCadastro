import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { Favorites } from "../pages/Favorites"
import { PageNotFound } from "../pages/PageNotFound"


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/register"> <Register /> </Route>
            <Route path="/login"> <Login /> </Route>
            <Route path="/dashboard"> <Dashboard /> </Route>
            <Route path="/favorites"> <Favorites /> </Route>
            <Route path="*"> <PageNotFound />  </Route>
        </Switch>
    )
}
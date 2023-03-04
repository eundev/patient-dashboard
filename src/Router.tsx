import {Switch, Route} from "wouter";
import DashboardLayout from "./layouts/DashboardLayout";
import Results from "./views/Results";
import Home from "./views/Home";

function Router(){
    return (
        <Switch>
            <Route path="/">
                <DashboardLayout>
                    <Home/>
                </DashboardLayout>
            </Route>
            <Route path="/results">
                <DashboardLayout>
                    <Results/>
                </DashboardLayout>
            </Route>
        </Switch>
    )
}

export default Router;
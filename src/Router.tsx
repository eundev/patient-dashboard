import {Switch, Route} from "wouter";
import DashboardLayout from "./layouts/DashboardLayout";
import FamilyLanding from "./views/family/Landing";
import Home from "./views/Home";
import IndividualResult from "./views/results/Individual";
import ResultsList from "./views/results/List";

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
                    <ResultsList/>
                </DashboardLayout>
            </Route>
            <Route path="/results/:id">
                <DashboardLayout>
                    <IndividualResult/>
                </DashboardLayout>
            </Route>
            <Route path="/family">
                <DashboardLayout>
                    <FamilyLanding/>
                </DashboardLayout>
            </Route>
        </Switch>
    )
}

export default Router;
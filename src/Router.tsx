import {Switch, Route} from "wouter";
import DashboardLayout from "./layouts/DashboardLayout";
import IndividualAppointment from "./views/appointments/Individual";
import ListAppointments from "./views/appointments/List";
import FamilyLanding from "./views/family/Landing";
import Home from "./views/Home";
import KinesiologyLanding from "./views/kinesiology/Landing";
import NutritionLanding from "./views/nutrition/Landing";
import IndividualResult from "./views/results/Individual";
import ResultsList from "./views/results/List";
import GeneralSettings from "./views/settings/General";

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
            <Route path="/settings">
                <DashboardLayout>
                    <GeneralSettings/>
                </DashboardLayout>
            </Route>
            <Route path="/appointments">
                <DashboardLayout>
                    <ListAppointments/>
                </DashboardLayout>
            </Route>
            <Route path="/appointments/:id">
                <DashboardLayout>
                    <IndividualAppointment/>
                </DashboardLayout>
            </Route>
            <Route path="/nutrition">
                <DashboardLayout>
                    <NutritionLanding/>
                </DashboardLayout>
            </Route>
            <Route path="/kinesiology">
                <DashboardLayout>
                    <KinesiologyLanding/>
                </DashboardLayout>
            </Route>
        </Switch>
    )
}

export default Router;
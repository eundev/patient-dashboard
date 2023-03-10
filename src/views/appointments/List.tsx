import React from "react";
import { Link } from "wouter";

function ListAppointments(){
    return <div>
        <Link to="/appointments/1234">
            Individual
        </Link>
    </div>
}

export default ListAppointments;
import React, { Component } from "react";
import HighLevelReport from "./HighLevelReport";
import EmployeeStats from "./EmployeeStats";

export default class App extends Component {
    render() {
        return (
            <div>
                <HighLevelReport/>
                <EmployeeStats/>
            </div>
        );
    }
}

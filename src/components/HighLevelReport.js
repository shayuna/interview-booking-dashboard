import React,{Component} from "react";
import HighLevelData from "./HighLevelData";

export default class HighLevelReport extends Component{
    constructor(){
        super();
        this.state={
            availableRooms:0,
            reservedRooms:0,
            checkedIn:0
        };
        const self=this;
        fetch("https://interview-booking-api.herokuapp.com/api/booking-snapshot")
        .then (function(response){
            return response.json();
        })
        .then(function(json){
            self.setState({availableRooms:json.availableRooms,
                          reservedRooms:json.reservedRooms,
                          checkedIn:json.checkedIn});
            console.log ("json is = ",JSON.stringify(json));
        })
        .catch(function(err){
            console.log("error is - $",err);
        });
    }
    render(){
        return (
            <div style={styles.wrapper}>
                <HighLevelData caption="Rooms available" data={this.state.availableRooms}/>
                <HighLevelData caption="Reserved rooms" data={this.state.reservedRooms}/>
                <HighLevelData caption="Checked in" data={this.state.checkedIn}/>
            </div>
        );
    }

}

const styles={
    wrapper:{
        display:"flex",
        justifyContent:"space-between",
    }
}
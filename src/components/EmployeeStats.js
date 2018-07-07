import React,{Component} from "react";
import EmployeeData from "./EmployeeData";
const moment=require("moment");

export default class EmployeeStats extends Component{
    constructor(){
        super();
        this.state={
            arEmployers:[],
        }
        const self=this;
        fetch("https://interview-booking-api.herokuapp.com/api/bookings")
        .then(function(response){
            return response.json();
        })
        .then(function(arData){
            const oEmployers={},arEmployers=[];
            arData.forEach((oData)=>{
                if (oData.employee){
                    const empl=oData.employee;
                    const deltaInHours = (moment(oData.checkOutDate,"DD-MM-YYYY").valueOf()-
                    moment(oData.checkInDate,"DD-MM-YYYY").valueOf())/1000/60/60;
                        if (!oEmployers[empl.id]){
                        oEmployers[empl.id]={
                            ...empl,
                            deltaInHours:0,

                        }
                        oEmployers[empl.id].deltaInHours+=deltaInHours;
                    }
                }
            });
            for (const prop in oEmployers){
                arEmployers.push(oEmployers[prop]);
                arEmployers.sort(function(a,b){
                    return b.deltaInHours-a.deltaInHours;
                })
            }
            self.setState({arEmployers:arEmployers});
            console.log("after sort - "+JSON.stringify(arEmployers));
        })
        .catch(function(err){
            console.log ("err in fetching data in EmployeeStats component. err is,",err);
        });

    }
    render(){
        return (
            <div style={styles.wrapper}>
                <div style={styles.caption}>Employee stats:</div>
                {
                    this.state.arEmployers.map((oEmp,ii)=>{
                        if (ii<3)
                        return (
                            <EmployeeData key={ii} name={oEmp.firstName+" ."+oEmp.lastName.substring(0,1)} pic={oEmp.profileImageUrl} deltaInHours={oEmp.deltaInHours}/>
                        );
                    })
                }
            </div>
        )
    }
}
const styles = {
    wrapper:{
        color:"#fff",
        marginTop:"50px"
    },
    emp:{
        color:"#fff",
    },
    caption:{
        fontFamily:"Lato",
        fontSize:"17px",
        color:"#fff",
        margin:"2em 0",
    }

}
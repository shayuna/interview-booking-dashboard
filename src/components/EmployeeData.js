import React from "react";

const EmployeeData = (props)=>(
    <div style={styles.employeeRecord}>
        <img style={{...styles.profileImg,...styles.paddingRight1}} src={props.pic}/><span style={styles.paddingRight1}>{props.name}</span><span>{props.deltaInHours}</span>
    </div>
);
const styles = {
    profileImg:{
        width:"33px",
        height:"33px",
    },
    employeeRecord:{
        display:"flex",
        alignItems:"center",
        padding:"1em"
    },
    paddingRight1:{
        paddingRight:"2em",
    }

}
export default EmployeeData;
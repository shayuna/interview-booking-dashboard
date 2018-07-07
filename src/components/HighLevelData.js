import React from "react";
const HighLevelData = (props)=>(
    <div>
        <div style={styles.dataStyle}>{props.data}</div>
        <div style={styles.captionStyle}>{props.caption}</div>
    </div>
);

const styles = {
    dataStyle:{
        fontFamily:"Lato",
        fontSize:"24px",
        color:"#fff"
    },
    captionStyle:{
        fontFamily:"Lato",
        fontSize:"12px",
        color:"#72848b"
    }
};

export default HighLevelData;
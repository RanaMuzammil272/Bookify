import React from "react";
import {Alert} from "react-bootstrap";

const errormessage = ({
    variant ="info" ,children
})=>{
    return (
        <Alert variant ={variant} style={{fontsize: 20}}>
        <strong>{children}</strong>
        </Alert>
    )
};
export default errormessage;
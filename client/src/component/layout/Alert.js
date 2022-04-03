import React from "react";
import { useSelector } from "react-redux";
import { selectAlert } from "../../features/alertSlice";

const Alert = () =>{

const alerts = useSelector(selectAlert);
console.log(alerts)
 return (
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((a) => (
    <div key={a.payload.id} className={`alert alert-${a.payload.alertType}`}>
     {a.payload.msg}
    </div>
  )))};


export default Alert;

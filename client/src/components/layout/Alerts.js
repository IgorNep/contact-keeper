import React, { useContext, useReducer } from "react";
import alertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const AlertContext = useContext(alertContext);
  const { alerts } = AlertContext;

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle">{alert.msg}</i>
      </div>
    ))
  );
};

export default Alerts;


import { v4 as uuid } from "uuid";

export const setAlertAction = (msg, alertType, time) => (dispatch) => {
 const id = uuid();
  dispatch({
   type: "alert/setAlert",
  payload: { msg, alertType, id },
});

  setTimeout(() => dispatch({ type: "alert/deleteAlert", payload: id }), time);
};


//export const setAlertAction = function setAlertAction(msg, alertType) {

//  let id = uuid();

 // return {  type: "alert/setAlert",
 // payload: { msg: msg, alertType: alertType, id: id } 

//}

  //setTimeout(() => ({ type: "alert/deleteAlert", payload: id }));}

//export const setAlertAction = function culo (msg, alertType){}
 //return 
 
 //  let id = uuid();
 // {
  //    type: "alert/setAlert",
   //   payload: { msg: msg, alertType: alertType, id: id }
  //  };
 // ;

  
//var setAlertAction = function setAlertAction(msg, alertType, time) {
 // return function (dispatch) {

 //   var id = uuid();
 //   dispatch({
  //    type: "alert/setAlert",
  //    payload: { msg: msg, alertType: alertType, id: id }
  //  });

   // setTimeout(function () {
   //   return dispatch({ type: "alert/deleteAlert", payload: id });
  //  }, time);
 // };
//};
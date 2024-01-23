import React from "react"

function Books(props){
    //console.log("props: ", props);
return(
    <div id={props.id}>
    <p>prueba pull en Books {props.masTxt}</p>
    </div>
)
}

export default Books
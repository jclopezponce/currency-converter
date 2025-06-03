import React from "react"

export default function Convertion(props) {
    return(
        <div className="result">{props.amount} {props.from} = {props.ratio} {props.to}
        
        </div>
    )
        
  }
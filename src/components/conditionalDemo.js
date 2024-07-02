import React, { useState } from "react";

export default function ConditionalDemo() {
    const [show,setShow] = useState(true);
    return (
        <div>
            This is ConditionalDemo <br/>
            <button onClick={()=>setShow(false)}>Change Show</button>
            {show?"Hellow User":""}
        </div>
    )
}
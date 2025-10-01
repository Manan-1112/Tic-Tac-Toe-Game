import React from 'react'
const Square = (props) => {
    return (
        <div>
            
            <div  onClick={props.onClick} className="square" style={{  height:"100px",width:"100px",border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center" ,cursor:"pointer"}}>
                <h1>{props.value}</h1>
            </div>
        </div>
    )
}   
export default Square